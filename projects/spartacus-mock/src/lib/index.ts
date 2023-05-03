import { SetupWorker, rest, setupWorker } from 'msw';
import { DefaultHandlers } from './defaultHandlers';
import { createLocalstorage } from './defaultLocalStorage';
import { defaultPassThroughUrls } from './defaultPassthrough';
import { MockConfig } from './types';
import { MockContentPages } from './utils/mock-page';
import { ContentPage } from './mock-data/pages/content';

function getWorker(config: MockConfig): SetupWorker {
  const mockContentPages = getCustomMockContentPages(config);
  const contentPage = new ContentPage(config.customSlots);
  const defaultHandlers = new DefaultHandlers(config.environment, mockContentPages, contentPage);
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

function getCustomMockContentPages(config: MockConfig): MockContentPages {
  const mockContentPages = new MockContentPages();

  if (config.contentPages) {
    mockContentPages.setCustomContentPages(config.contentPages);
  }

  if (config.productDetailPage) {
    mockContentPages.setCustomProductDetailPage(config.productDetailPage);
  }

  if (config.productCategoryPage) {
    mockContentPages.setCustomProductCategoryPage(config.productCategoryPage);
  }

  if (config.homePage) {
    mockContentPages.setCustomHomePage(config.homePage);
  }

  return mockContentPages;
}

export function prepareMock(config: MockConfig): Promise<ServiceWorkerRegistration | undefined> {
  if (config.enableWorker) {
    const worker = getWorker(config);

    return worker.start();
  }

  return Promise.resolve(undefined);
}
