import { SetupWorker, rest, setupWorker } from 'msw';
import { defaultPassThroughUrls } from './defaultPassthrough';
import { HandlerService } from './handlers';
import { LocalStorageService } from './local-storage';
import { PageFactoryService } from './mock-data';
import { PageService } from './mock-data';
import { MockConfig } from './types';

function getWorker(config: MockConfig): SetupWorker {
  const localStorageService = new LocalStorageService(config);
  const pageFactoryService = new PageFactoryService(config.customSlots || []);
  const pageService = new PageService(config, pageFactoryService);
  const handlerService = new HandlerService(config.environment, pageFactoryService, pageService, localStorageService);

  const passThroughUrls = [...defaultPassThroughUrls, ...(config.passThroughUrls || [])];

  return setupWorker(
    ...passThroughUrls.map((passThroughUrl) => {
      return rest[passThroughUrl.requestFunction](passThroughUrl.url, (req) => {
        return req.passthrough();
      });
    }),

    // Custom Handlers (overwrite default handlers due to the order of spreading them into the array)
    ...(config.handlers || []),

    // Default Handlers
    ...handlerService.getAllHandlers()
  );
}

export function prepareMock(config: MockConfig): Promise<ServiceWorkerRegistration | undefined> {
  if (config.enableWorker) {
    const worker = getWorker(config);

    return worker.start();
  }

  return Promise.resolve(undefined);
}
