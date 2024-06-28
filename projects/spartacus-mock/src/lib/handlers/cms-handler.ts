import { http, HttpHandler, HttpResponse, passthrough } from 'msw';
import { Occ } from '@spartacus/core';
import {
  activeTabItems,
  components,
  footerLinkComponents,
  myAccountLinkComponents,
  navMainLinkComponents,
  PageFactoryService,
  PageService,
  productDetailTabComponents,
} from '../mock-data';
import { MockConfig } from '../types';
import { readSearchParams } from '../utils';

export const getCmsPagesHandler = (
  routes: any, // TODO change type to be something real after SAP exports the default routes config
  pageFactoryService: PageFactoryService,
  pageService: PageService,
  config: MockConfig
): HttpHandler[] => {
  return [
    http.get(routes.pages, ({ request }) => {
      const pageType = readSearchParams(request, 'pageType');
      const pageLabelOrId = readSearchParams(request, 'pageLabelOrId');
      const productCode = readSearchParams(request, 'productCode');

      // return passThrough answer if inclusionMode is enabled and pageId is not within mockedPageIds
      if (
        config.inclusionMode &&
        !config.mockedPageIds?.includes(pageService.getSanitizedPageLabelOrId(pageLabelOrId || ''))
      ) {
        return passthrough();
      }

      const page: Occ.CMSPage | null = pageService.getMockPage(pageType, pageLabelOrId, productCode);

      if (page) {
        return HttpResponse.json(page);
      }

      // eslint-disable-next-line  no-console
      console.error(
        `The page with the pageLabelOrId ${pageLabelOrId} and the page type ${pageType} has not been mocked yet`
      );

      return HttpResponse.json(
        {
          errors: [
            {
              message: `The page with the pageLabelOrId ${pageLabelOrId} and the page type ${pageType} has not been mocked yet`,
              type: 'CMSItemNotFoundError',
            },
          ],
        },
        { status: 404 }
      );
    }),
  ];
};

export const getCmsComponentsHandler = (
  routes: any // TODO change type to be something real after SAP exports the default routes config
): HttpHandler[] => {
  return [
    // additional component data call
    http.get(routes.components, ({ request }) => {
      const componentIds = readSearchParams(request, 'componentIds') || '';
      const componentIdsArray = componentIds.split(',');

      if (activeTabItems.some((tabUid) => componentIds.indexOf(tabUid) > -1)) {
        return HttpResponse.json(productDetailTabComponents(componentIdsArray || []));
      } else if (componentIds.indexOf('PersonalDetailsLink') > -1) {
        // special call to get the MyAccount Dropdown Link components
        return HttpResponse.json(myAccountLinkComponents(componentIdsArray || []));
      } else if (componentIds.indexOf('nav_main_') > -1) {
        // special call to get the Nav Main Link components
        return HttpResponse.json(navMainLinkComponents(componentIdsArray || []));
      } else if (componentIds.indexOf('footer_') > -1) {
        // special call to get the Footer Link components
        return HttpResponse.json(footerLinkComponents(componentIdsArray || []));
      } else {
        // general call to get the Main Navigation Link components
        return HttpResponse.json(components(componentIdsArray || []));
      }
    }),
  ];
};
