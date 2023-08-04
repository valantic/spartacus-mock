import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { Occ } from '@spartacus/core';
import { PageFactoryService } from '../mock-data';
import { PageService } from '../mock-data';
import {
  components,
  footerLinkComponents,
  myAccountLinkComponents,
  navMainLinkComponents,
  productDetailTabComponents,
} from '../mock-data';
import { activeTabItems } from '../mock-data';
import { MockConfig } from '../types';
import { readSearchParams } from '../utils/request-params';

export const getCmsPagesHandler = (
  routes: any, // TODO change type to be something real after SAP exports the default routes config
  pageFactoryService: PageFactoryService,
  pageService: PageService,
  config: MockConfig
): RestHandler[] => {
  return [
    rest.get(routes.pages, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const pageType = readSearchParams(req, 'pageType');
      const pageLabelOrId = readSearchParams(req, 'pageLabelOrId');
      const productCode = readSearchParams(req, 'productCode');

      // return passThrough answer if defaultData is disabled and pageId is not within mockedPageIds
      if (
        config.disableDefaultData &&
        !config.mockedPageIds?.includes(pageService.getSanitizedPageLabelOrId(pageLabelOrId))
      ) {
        return req.passthrough();
      }

      const page: Occ.CMSPage | null = pageService.getMockPage(pageType, pageLabelOrId, productCode);

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
  ];
};

export const getCmsComponentsHandler = (
  routes: any, // TODO change type to be something real after SAP exports the default routes config
  pageFactoryService: PageFactoryService,
  pageService: PageService,
  config: MockConfig
): RestHandler[] => {
  return [
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
