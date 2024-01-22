import { http, passthrough } from 'msw';
import { SetupWorker, setupWorker } from 'msw/browser';
import { HandlerService } from './handlers';
import { LocalStorageService } from './local-storage';
import { PageFactoryService, PageService } from './mock-data';
import { PassThroughService } from './pass-through';
import { MockConfig } from './types';

function getWorker(config: MockConfig): SetupWorker {
  const localStorageService = new LocalStorageService(config);
  const pageFactoryService = new PageFactoryService(config.customSlots || []);
  const pageService = new PageService(config, pageFactoryService);
  const passThroughService = new PassThroughService();
  const handlerService = new HandlerService(config, pageFactoryService, pageService, localStorageService);

  const passThroughRequests = [
    ...(config.enableDefaultData ? passThroughService.getPassThroughRequests() : []),
    ...(config.passThroughRequests || []),
  ];

  const worker = setupWorker(
    ...passThroughRequests.map((passThroughUrl) => {
      return http[passThroughUrl.requestFunction](passThroughUrl.url, ({ request }) => {
        return passthrough();
      });
    }),

    // Custom Handlers (overwrite default handlers due to the order of spreading them into the array)
    ...(config.handlers || []),

    // Default Handlers
    ...(config.enableDefaultData ? handlerService.getAllHandlers() : []),

    // Translations Handler if custom translations are provided
    ...(config.translations ? handlerService.getTranslationsHandler() : []),

    // Pages only Handler in inclusionMode to be able to pass through pages requests which are not included in the mockedPages array
    ...(config.inclusionMode ? handlerService.getPagesHandler() : [])
  );

  if (config.debug) {
    worker.listHandlers().forEach((handler) => {
      // eslint-disable-next-line  no-console
      console.log(handler.info.header);
    });
  }

  return worker;
}

export function prepareMock(config: MockConfig): Promise<ServiceWorkerRegistration | undefined> {
  if (config.enableWorker) {
    const worker = getWorker(config);

    return worker.start({
      ...(config.quiet ? { quiet: true } : {}),
      ...(config.inclusionMode
        ? {
            /**
             * unhandledRequest handler to only show warnings, if a request is part of the mockedRequests array
             * This is used for the inclusionMode where all requests are let through per default
             *
             * @param request
             * @param print
             */
            onUnhandledRequest(request, print) {
              const url = new URL(request.url);
              if (!url.pathname.includes(config.environment.backend.occ?.prefix || '')) {
                return;
              }

              const baseSiteId = url.pathname.split('/')[3]; // pathName is /occ/v2/:baseSiteId/...

              const isMockedRequest = config.mockedRequests?.some((mockedRequest) => {
                const sanitizedUrl = mockedRequest.url.replace(/:baseSiteId/g, baseSiteId);
                return (
                  sanitizedUrl.endsWith(url.pathname) && request.method === mockedRequest.requestFunction.toUpperCase()
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
