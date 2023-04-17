import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { baseSites } from './mock-data/base-sites/base-sites';
import { languages } from './mock-data/languages/languages';
import { currencies } from './mock-data/currencies/currencies';
import { consentTemplates } from './mock-data/consent-templates/consent-templates';
import { getDefaultRoutes } from './defaultRoutes';
import { Environment } from './types';
import { translations } from './mock-data/translations/translations';
import { contentPages } from './mock-data/pages';
import { productDetailPage } from './mock-data/pages/product-detail';
import { homePage } from './mock-data/pages/home';
import { tempPage } from './mock-data/pages/temp';
import {
  components,
  footerLinkComponents,
  myAccountLinkComponents,
  navMainLinkComponents,
  productDetailTabComponents
} from './mock-data/components/components';
import { activeTabItems, product, productBaseData, productClassifications } from './mock-data/products/product';
import { searchSuggestions } from './mock-data/search/search-suggestions';
import { productReferences } from './mock-data/products/product-references';
import { faker } from '@faker-js/faker';
import { productReviews, productReviewSubmit } from './mock-data/products/product-reviews';
import { authRevoke, authToken } from './mock-data/auth/auth';
import { user } from './mock-data/auth/user';
import {
  addToCart,
  addVoucher,
  CartUserType, deleteCart,
  deleteVoucher,
  getCart, getCarts, getUserTypeById, removeEntries,
  updateEntries
} from './mock-data/commerce/cart';
import { titles } from './mock-data/account/titles';
import { notificationPreferences } from './mock-data/account/notification-preferences';
import { productInterests } from './mock-data/account/product-interests';

export function getDefaultHandlers (environment: Environment): RestHandler[] {
  const routes = getDefaultRoutes(environment);

  return [
    rest.get(routes.baseSites, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(baseSites()));
    }),

    rest.get(routes.languages, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(languages()));
    }),

    rest.get(routes.currencies, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(currencies()));
    }),

    rest.get(routes.consentTemplates, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(consentTemplates()));
    }),

    rest.get(routes.notificationPreferences, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(notificationPreferences()));
    }),

    rest.get(routes.productInterests, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(productInterests()));
    }),

    // custom call to return the translation files
    rest.get(routes.i18n, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const language = typeof req.params['language'] === 'string' ? req.params['language'] : '';
      const namespace = typeof req.params['namespace'] === 'string' ? req.params['namespace'] : '';

      return res(ctx.status(200), ctx.json(translations(language, namespace)));
    }),

    // authentication call to return the user token
    rest.post(routes.authLogin, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(authToken()));
    }),

    // authentication call to revoke the user token
    rest.get(routes.authRevoke, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(authRevoke()));
    }),

    // user call to return the user details after login
    rest.get(routes.users, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(user()));
    }),

    // temp user call to return the user details after login
    rest.get(routes.usersTemp, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(user()));
    }),

    // call to get all title options
    rest.get(routes.titles, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(titles()));
    }),

    // cms pages call
    rest.get(routes.pages, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const pageLabelOrId = req.url.searchParams?.get('pageLabelOrId');
      const pageType = req.url.searchParams?.get('pageType');

      if (pageType === 'ContentPage' && pageLabelOrId) {
        let pageLabelOrIdSanitized = pageLabelOrId;

        if (pageLabelOrId.startsWith('/')) {
          pageLabelOrIdSanitized = pageLabelOrId.slice(1, pageLabelOrId.length);
        }

        for (const mockPageLabelOrId in contentPages()) {
          if (pageLabelOrIdSanitized.startsWith(mockPageLabelOrId)) {
            return res(ctx.status(200), ctx.json(contentPages()[mockPageLabelOrId]));
          }
        }

        // return 404 page as the page was not found
        return res(
          ctx.status(404),
          ctx.json({
            errors: [
              {
                message: `No content page found matching the provided label or id: ${pageLabelOrId}`,
                type: 'CMSItemNotFoundError',
              },
            ],
          })
        );
      } else if (pageType === 'ProductPage') {
        // its a product detail page
        const productCode = req.url.searchParams?.get('code');

        return res(ctx.status(200), ctx.json(productDetailPage(productCode || '')));
      } else if (!pageType && !pageLabelOrId) {
        // its the homepage
        return res(ctx.status(200), ctx.json(homePage()));
      } else {
        return res(ctx.status(200), ctx.json(tempPage(pageType || 'ContentPage', pageLabelOrId || '')));
      }
    }),

    // additional component data call
    rest.get(routes.components, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const componentIds = req.url.searchParams?.get('componentIds') || '';
      const componentIdsArray = componentIds.split(',');

      if (activeTabItems.some(tabUid => componentIds.indexOf(tabUid) > -1)) {
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
        // generall call to get the Main Navigation Link components
        return res(ctx.status(200), ctx.json(components(componentIdsArray || [])));
      }
    }),

    // Search suggestions
    rest.get(routes.searchSuggestions, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const term = req.url.searchParams.get('term') || '';
      const max = req.url.searchParams.get('max') || '';

      return res(ctx.status(200), ctx.json(searchSuggestions(term, parseInt(max))));
    }),

    // product references call
    rest.get(routes.productReferences, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const referenceType = req.url.searchParams.get('referenceType') || '';

      return res(ctx.status(200), ctx.json(productReferences(referenceType, faker.datatype.number(100))));
    }),

    // product reviews call
    rest.get(routes.productReviews, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(productReviews()));
    }),

    rest.post(routes.productReviews, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(productReviewSubmit()));
    }),

    // product general data call (used for product call scopes default / list / details)
    rest.get(routes.product, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const productCode = typeof req.params['productCode'] === 'string' ? req.params['productCode'] : '';
      const requestFields = req.url.searchParams?.get('fields') || '';

      if (requestFields.indexOf('variantOptions') > -1) {
        // fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType
        return res(ctx.status(200), ctx.json(productBaseData()));
      } else if (requestFields.indexOf('classifications') > -1) {
        // fields=classifications
        return res(ctx.status(200), ctx.json(productClassifications()));
      } else {
        // all other scopes
        return res(ctx.status(200), ctx.json(product(productCode, 1)));
      }
    }),

    // cart call to return the cart details for a cart containing products
    rest.get(routes.cart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
      const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

      return res(ctx.status(200), ctx.json(getCart(cartId, getUserTypeById(userId))));
    }),

    // cart call to return multiple carts containing products
    rest.get(routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

      return res(ctx.status(200), ctx.json(getCarts(getUserTypeById(userId))));
    }),

    // initial cart post call to get an empty cart with a cart id
    rest.post(routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

      return res(ctx.status(201), ctx.json(getCart('', getUserTypeById(userId))));
    }),

    // cart post call to add entries to the cart
    rest.post(routes.addEntries, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const { quantity, product } = await req.json();

      return res(ctx.status(201), ctx.json(addToCart(product, quantity)));
    }),

    // cart patch call to update entries in the cart
    rest.patch(routes.updateEntries, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
      const entryNumber = parseInt(typeof req.params['entryNumber'] === 'string' ? req.params['entryNumber'] : '');
      const { quantity } = await req.json();

      return res(ctx.status(200), ctx.json(updateEntries(cartId, entryNumber, quantity)));
    }),

    // cart delete call to update entries in the cart
    rest.delete(routes.removeEntries, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
      const entryNumber = parseInt(typeof req.params['entryNumber'] === 'string' ? req.params['entryNumber'] : '');

      removeEntries(cartId, entryNumber);
      return res(ctx.status(200), ctx.json({}));
    }),

    // cart save call which is done, if the currently loggedIn user does not have a wishlist cart
    rest.delete(routes.deleteCart, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      // const userId = typeof req.params.userId === 'string' ? req.params.userId : '';
      deleteCart();

      return res(ctx.status(201), ctx.json({}));
    }),

    // cart save call which is done, if the currently loggedIn user does not have a wishlist cart
    rest.patch(routes.saveCart, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      // const userId = typeof req.params.userId === 'string' ? req.params.userId : '';

      return res(ctx.status(201), ctx.json(getCart('', CartUserType.OCC_USER_ID_CURRENT)));
    }),

    rest.post(routes.cartVoucher, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const voucherId = req.url.searchParams?.get('voucherId') || '';

      addVoucher(voucherId);
      return res(ctx.status(200), ctx.json({}));
    }),

    rest.delete(routes.cartVoucherRemove, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const voucherCode = typeof req.params['voucherCode'] === 'string' ? req.params['voucherCode'] : '';

      deleteVoucher(voucherCode);
      return res(ctx.status(200), ctx.json({}));
    }),

    // search page
    // TODO add mock search result and make search work
    /*rest.get(routes.search, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const query = req.url.searchParams.get('query') || '';
      const pageSize = parseInt(req.url.searchParams.get('pageSize') || '', 10);
      const currentPage = parseInt(req.url.searchParams.get('currentPage') || '', 10);

      return res(ctx.status(200), ctx.json(searchResult(query, 0, pageSize)));
    }),*/

    // media route to load sap related media's from project's dev server
    // TODO check if mediaCommerce is needed in default handlers
    /*rest.get(routes.mediaCommerce, (req: RestRequest, res: ResponseComposition, _ctx: RestContext) => {
      return res(redirect(`https://sparta.webdev.v-zug.ch${req.url.pathname}`, 301));
    }),*/
  ]
}
