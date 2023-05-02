import { RestHandler } from 'msw';
import { getDefaultRoutes } from './defaultRoutes';
import { Environment } from './types';
import {
  getBaseHandlers,
  getUserHandlers,
  getCmsHandlers,
  getSearchHandlers,
  getProductHandlers,
  getCartHandlers,
  getCheckoutHandlers,
  getOrderHandlers,
  getAccountHandlers,
  getStoreFinderHandlers,
} from './handlers';
import { MockContentPages } from './utils/mock-page';

export class DefaultHandlers {
  readonly routes;

  constructor(protected environment: Environment, protected mockContentPages: MockContentPages) {
    this.routes = getDefaultRoutes(environment);
  }

  getAllHandlers(): RestHandler[] {
    return [
      ...getBaseHandlers(this.routes),
      ...getUserHandlers(this.routes),
      ...getCmsHandlers(this.routes, this.mockContentPages),
      ...getSearchHandlers(this.routes),
      ...getProductHandlers(this.routes),
      ...getCartHandlers(this.routes),
      ...getCheckoutHandlers(this.routes),
      ...getOrderHandlers(this.routes),
      ...getAccountHandlers(this.routes),
      ...getStoreFinderHandlers(this.routes),
    ];
  }
}
