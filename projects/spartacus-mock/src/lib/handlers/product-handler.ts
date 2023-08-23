import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { createFullProduct, createReview, productReferenceList, productSearchPage, reviewList } from '../mock-data';
import { readSearchParams, readUrlParams } from '../utils/request-params';

export const getProductHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.productReferences, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const referenceType = readSearchParams(req, 'referenceType');

      return res(ctx.status(200), ctx.json(productReferenceList({ referenceType })));
    }),

    rest.get(routes.productReviews, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(reviewList()));
    }),

    rest.post(routes.productReviews, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createReview()));
    }),

    rest.get(routes.productSearch, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const query = readSearchParams(req, 'query');
      const sort = readSearchParams(req, 'sort');
      const pageSize = parseInt(readSearchParams(req, 'pageSize'));
      const currentPage = parseInt(readSearchParams(req, 'currentPage'));

      return res(
        ctx.status(200),
        ctx.json(
          productSearchPage(undefined, {
            query,
            pageSize,
            sort,
            currentPage,
          })
        )
      );
    }),

    // product general data call (used for product call scopes default / list / details)
    rest.get(routes.product, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const productCode = readUrlParams(req, 'productCode');

      return res(ctx.status(200), ctx.json(createFullProduct({ code: productCode })));
    }),
  ];
};
