import { SetupWorker, rest, setupWorker } from 'msw';
import { HandlerService } from './handlers';
import { LocalStorageService } from './local-storage';
import { PageFactoryService } from './mock-data';
import { PageService } from './mock-data';
import { PassThroughService } from './pass-through';
import { MockConfig } from './types';

function getWorker(config: MockConfig): SetupWorker {
  const localStorageService = new LocalStorageService(config);
  const pageFactoryService = new PageFactoryService(config.customSlots || []);
  const pageService = new PageService(config, pageFactoryService);
  const passThroughService = new PassThroughService();
  const handlerService = new HandlerService(config, pageFactoryService, pageService, localStorageService);

  const passThroughRequests = [
    ...(!config.disableDefaultData ? passThroughService.getPassThroughRequests() : []),
    ...(config.passThroughRequests || []),
  ];

  const server = setupWorker(
    ...passThroughRequests.map((passThroughUrl) => {
      return rest[passThroughUrl.requestFunction](passThroughUrl.url, (req) => {
        return req.passthrough();
      });
    }),

    // Custom Handlers (overwrite default handlers due to the order of spreading them into the array)
    ...(config.handlers || []),

    // Default Handlers
    ...(config.disableDefaultData ? handlerService.getPagesHandler() : handlerService.getAllHandlers())
  );

  if (config.debug) {
    server.printHandlers();
  }

  return server;
}

export function prepareMock(config: MockConfig): Promise<ServiceWorkerRegistration | undefined> {
  if (config.enableWorker) {
    const worker = getWorker(config);

    return worker.start({
      ...(config.disableDefaultData
        ? {
            // unhandledRequest handler to only show warnings, if a request is part of the mockedRequests array
            onUnhandledRequest(req, print) {
              if (!req.url.pathname.includes(config.environment.backend.occ?.prefix || '')) {
                return;
              }

              const baseSiteId = req.url.pathname.split('/')[3]; // pathName is /occ/v2/:baseSiteId/...

              const isMockedRequest = config.mockedRequests?.some((mockedRequest) => {
                const sanitizedUrl = mockedRequest.url.replace(/:baseSiteId/g, baseSiteId);
                return (
                  sanitizedUrl.endsWith(req.url.pathname) && req.method === mockedRequest.requestFunction.toUpperCase()
                );
              });

              if (!isMockedRequest) {
                return;
              }

              print.warning();
            },
          }
        : {}),
    });
  }

  return Promise.resolve(undefined);
}
