import { HttpHandler } from 'msw';
import { getDefaultRoutes } from '../defaultRoutes';
import { LocalStorageService } from '../local-storage';
import { PageFactoryService, PageService } from '../mock-data';
import { MockConfig } from '../types';
import { getAccountHandlers } from './account-handler';
import { getBaseHandlers } from './base-handler';
import { getCartHandlers } from './cart-handler';
import { getCheckoutHandlers } from './checkout-handler';
import { getCmsComponentsHandler, getCmsPagesHandler } from './cms-handler';
import { getOrderHandlers } from './order-handler';
import { getProductHandlers } from './product-handler';
import { getSearchHandlers } from './search-handler';
import { getStoreFinderHandlers } from './store-finder-handler';
import { getUserHandlers } from './user-handler';

/**
 * The HandlerService is responsible for returning all handlers for the Spartacus Mock Server.
 */
export class HandlerService {
  readonly routes;

  constructor(
    protected config: MockConfig,
    protected pageFactoryService: PageFactoryService,
    protected pageService: PageService,
    protected localStorageService: LocalStorageService
  ) {
    this.routes = getDefaultRoutes(config.environment);
  }

  getAllHandlers(): HttpHandler[] {
    return [
      ...getBaseHandlers(this.routes, this.config),
      ...getUserHandlers(this.routes),
      ...getCmsPagesHandler(this.routes, this.pageFactoryService, this.pageService, this.config),
      ...getCmsComponentsHandler(this.routes),
      ...getSearchHandlers(this.routes),
      ...getProductHandlers(this.routes),
      ...getCartHandlers(this.routes, this.localStorageService),
      ...getCheckoutHandlers(this.routes),
      ...getOrderHandlers(this.routes),
      ...getAccountHandlers(this.routes),
      ...getStoreFinderHandlers(this.routes),
    ];
  }

  getPagesHandler(): HttpHandler[] {
    return [...getCmsPagesHandler(this.routes, this.pageFactoryService, this.pageService, this.config)];
  }
}
