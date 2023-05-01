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

export class DefaultHandlers {
  readonly routes;

  constructor(protected environment: Environment) {
    this.routes = getDefaultRoutes(environment);
  }

  getAllHandlers(): RestHandler[] {
    return [
      ...getBaseHandlers(this.routes),
      ...getUserHandlers(this.routes),
      ...getCmsHandlers(this.routes),
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
