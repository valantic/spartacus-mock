import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { store, stores, storesAndRegionsStoreCount } from '../mock-data/store-finder/store-finder';

export const getStoreFinderHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.storescounts, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(storesAndRegionsStoreCount()));
    }),

    rest.get(routes.stores, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(stores()));
    }),

    rest.get(routes.store, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(store()));
    }),
  ];
};
