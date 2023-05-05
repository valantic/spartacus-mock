import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import {
  createPointOfService,
  storeFinderSearchPage,
  storesAndRegionsStoreCount,
} from '../mock-data/store-finder/store-finder';

export const getStoreFinderHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.storescounts, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(storesAndRegionsStoreCount()));
    }),

    rest.get(routes.stores, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(storeFinderSearchPage()));
    }),

    rest.get(routes.store, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createPointOfService()));
    }),
  ];
};
