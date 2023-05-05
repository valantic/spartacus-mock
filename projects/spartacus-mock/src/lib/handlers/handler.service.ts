import { RestHandler } from 'msw';
import { getDefaultRoutes } from '../defaultRoutes';
import { LocalStorageService } from '../local-storage';
import { PageFactoryService, PageService } from '../mock-data';
import { Environment } from '../types';
import { getAccountHandlers } from './account-handler';
import { getBaseHandlers } from './base-handler';
import { getCartHandlers } from './cart-handler';
import { getCheckoutHandlers } from './checkout-handler';
import { getCmsHandlers } from './cms-handler';
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
    protected environment: Environment,
    protected pageFactoryService: PageFactoryService,
    protected pageService: PageService,
    protected localStorageService: LocalStorageService
  ) {
    this.routes = getDefaultRoutes(environment);
  }

  getAllHandlers(): RestHandler[] {
    return [
      ...getBaseHandlers(this.routes),
      ...getUserHandlers(this.routes),
      ...getCmsHandlers(this.routes, this.pageFactoryService, this.pageService),
      ...getSearchHandlers(this.routes),
      ...getProductHandlers(this.routes),
      ...getCartHandlers(this.routes, this.localStorageService),
      ...getCheckoutHandlers(this.routes),
      ...getOrderHandlers(this.routes),
      ...getAccountHandlers(this.routes),
      ...getStoreFinderHandlers(this.routes),
    ];
  }
}
