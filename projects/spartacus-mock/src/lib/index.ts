import { rest, SetupWorker, setupWorker } from 'msw';
import { getDefaultHandlers } from './defaultHandlers';
import { defaultPassThroughUrls } from './defaultPassthrough';
import { MockConfig } from './types';
import { createLocalstorage } from './defaultLocalStorage';

function getWorker(config: MockConfig): SetupWorker {
  // create default local storage if it does not exist
  createLocalstorage(config);

  const passThroughUrls = [...defaultPassThroughUrls, ...(config.passThroughUrls || [])];

  return setupWorker(
    ...passThroughUrls.map((passThroughUrl) => {
      return rest[passThroughUrl.requestFunction](passThroughUrl.url, (req) => {
        return req.passthrough();
      });
    }),
    // TODO decide how default and custom handlers should be merged
    ...getDefaultHandlers(config.environment),

    // TODO figure out if overriding default handlers with custom handlers is possible
    ...(config.handlers || [])
  );
}

export function prepareMock(config: MockConfig): Promise<ServiceWorkerRegistration | undefined> {
  if (config.enableWorker) {
    const worker = getWorker(config);

    return worker.start();
  }

  return Promise.resolve(undefined);
}
