import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { MockContentPages } from '../utils/mock-page';
import { activeTabItems } from '../mock-data/products/product';
import {
  components,
  footerLinkComponents,
  myAccountLinkComponents,
  navMainLinkComponents,
  productDetailTabComponents,
} from '../mock-data/components/components';
import { Occ } from '@spartacus/core';
import { readSearchParams } from '../utils/request-params';

export const getCmsHandlers = (routes: any, mockContentPages: MockContentPages): RestHandler[] => {
  return [
    rest.get(routes.pages, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const pageType = readSearchParams(req, 'pageType');
      const pageLabelOrId = readSearchParams(req, 'pageLabelOrId');
      const productCode = readSearchParams(req, 'productCode');
      const page: Occ.CMSPage | null = mockContentPages?.getMockPage(pageType, pageLabelOrId, productCode);

      if (page) {
        return res(ctx.status(200), ctx.json(page));
      }

      // eslint-disable-next-line  no-console
      console.error(
        `The page with the pageLabelOrId ${pageLabelOrId} and the page type ${pageType} has not been mocked yet`
      );
      return res(
        ctx.status(404),
        ctx.json({
          errors: [
            {
              message: `The page with the pageLabelOrId ${pageLabelOrId} and the page type ${pageType} has not been mocked yet`,
              type: 'CMSItemNotFoundError',
            },
          ],
        })
      );
    }),

    // additional component data call
    rest.get(routes.components, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const componentIds = readSearchParams(req, 'componentIds');
      const componentIdsArray = componentIds.split(',');

      if (activeTabItems.some((tabUid) => componentIds.indexOf(tabUid) > -1)) {
        return res(ctx.status(200), ctx.json(productDetailTabComponents(componentIdsArray || [])));
      } else if (componentIds.indexOf('PersonalDetailsLink') > -1) {
        // special call to get the MyAccount Dropdown Link components
        return res(ctx.status(200), ctx.json(myAccountLinkComponents(componentIdsArray || [])));
      } else if (componentIds.indexOf('nav_main_') > -1) {
        // special call to get the Nav Main Link components
        return res(ctx.status(200), ctx.json(navMainLinkComponents(componentIdsArray || [])));
      } else if (componentIds.indexOf('footer_') > -1) {
        // special call to get the Footer Link components
        return res(ctx.status(200), ctx.json(footerLinkComponents(componentIdsArray || [])));
      } else {
        // general call to get the Main Navigation Link components
        return res(ctx.status(200), ctx.json(components(componentIdsArray || [])));
      }
    }),
  ];
};
