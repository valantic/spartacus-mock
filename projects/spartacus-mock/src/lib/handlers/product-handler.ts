import { http, HttpHandler, HttpResponse } from 'msw';
import { createFullProduct, createReview, productReferenceList, productSearchPage, reviewList } from '../mock-data';
import { readSearchParams, readUrlParams } from '../utils';

export const getProductHandlers = (routes: any): HttpHandler[] => {
  return [
    http.get(routes.productReferences, ({ request }) => {
      const referenceType = readSearchParams(request, 'referenceType');

      return HttpResponse.json(productReferenceList({ referenceType }));
    }),

    http.get(routes.productReviews, () => {
      return HttpResponse.json(reviewList());
    }),

    http.post(routes.productReviews, () => {
      return HttpResponse.json(createReview());
    }),

    // handler needs to be before the routes.product handler to not always get the product data
    http.get(routes.productSearch, ({ request }) => {
      const query = readSearchParams(request, 'query');
      const sort = readSearchParams(request, 'sort');
      const pageSize = parseInt(readSearchParams(request, 'pageSize') || '');
      const currentPage = parseInt(readSearchParams(request, 'currentPage') || '');

      return HttpResponse.json(
        productSearchPage(undefined, {
          query,
          pageSize,
          sort,
          currentPage,
        })
      );
    }),

    // product general data call (used for product call scopes default / list / details)
    http.get(routes.product, ({ request, params }) => {
      const productCode = readUrlParams(params, 'productCode');

      return HttpResponse.json(createFullProduct({ code: productCode }));
    }),
  ];
};
