import { HttpResponse, RequestHandler, http } from 'msw';
import {
  createPointOfService,
  storeFinderSearchPage,
  storesAndRegionsStoreCount,
} from '../mock-data/store-finder/store-finder';

export const getStoreFinderHandlers = (routes: any): RequestHandler[] => {
  return [
    http.get(routes.storescounts, () => {
      return HttpResponse.json(storesAndRegionsStoreCount());
    }),

    http.get(routes.stores, () => {
      return HttpResponse.json(storeFinderSearchPage());
    }),

    http.get(routes.store, () => {
      return HttpResponse.json(createPointOfService());
    }),
  ];
};
