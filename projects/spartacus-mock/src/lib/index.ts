import { SetupWorker, rest, setupWorker } from 'msw';
import { DefaultHandlers } from './defaultHandlers';
import { createLocalstorage } from './defaultLocalStorage';
import { defaultPassThroughUrls } from './defaultPassthrough';
import { MockConfig } from './types';

function getWorker(config: MockConfig): SetupWorker {
  const defaultHandlers = new DefaultHandlers(config.environment);
  // create default local storage if it does not exist
  createLocalstorage(config);

  const passThroughUrls = [...defaultPassThroughUrls, ...(config.passThroughUrls || [])];

  return setupWorker(
    ...passThroughUrls.map((passThroughUrl) => {
      return rest[passThroughUrl.requestFunction](passThroughUrl.url, (req) => {
        return req.passthrough();
      });
    }),

    // Custom Handlers (overwrite default handlers)
    ...(config.handlers || []),

    // Default Handlers
    ...defaultHandlers.getAllHandlers()
  );
}

export function prepareMock(config: MockConfig): Promise<ServiceWorkerRegistration | undefined> {
  if (config.enableWorker) {
    const worker = getWorker(config);

    return worker.start();
  }

  return Promise.resolve(undefined);
}
