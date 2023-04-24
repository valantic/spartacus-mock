import { faker } from '@faker-js/faker';
import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { getDefaultRoutes } from './defaultRoutes';
import { availableAddresses } from './mock-data/account/addresses';
import { customerCoupons } from './mock-data/account/customer-coupons';
import { notificationPreferences } from './mock-data/account/notification-preferences';
import { createPaymentDetails, payments } from './mock-data/account/payments';
import { productInterests } from './mock-data/account/product-interests';
import { authRevoke, authToken } from './mock-data/auth/auth';
import { user } from './mock-data/auth/user';
import { baseSites } from './mock-data/base-sites/base-sites';
import {
  CartUserType,
  addToCart,
  deleteCart,
  getCart,
  getCarts,
  getUserTypeById,
  removeEntries,
  setGuestCheckout,
  updateEntries,
} from './mock-data/commerce/cart';
import { getCardTypes, getCheckoutDetails, getDeliveryModes } from './mock-data/commerce/checkout';
import { getPaymentSopRequest } from './mock-data/commerce/payment-sop';
import { addVoucher, deleteVoucher } from './mock-data/commerce/voucher';
import {
  components,
  footerLinkComponents,
  myAccountLinkComponents,
  navMainLinkComponents,
  productDetailTabComponents,
} from './mock-data/components/components';
import { consentTemplates } from './mock-data/consent-templates/consent-templates';
import { countries } from './mock-data/general/countries';
import { currencies } from './mock-data/general/currencies';
import { regions } from './mock-data/general/regions';
import { titles } from './mock-data/general/titles';
import { languages } from './mock-data/languages/languages';
import { createOrder } from './mock-data/order/order';
import { getOrders } from './mock-data/order/order-history';
import { contentPages } from './mock-data/pages';
import { homePage } from './mock-data/pages/home';
import { productDetailPage } from './mock-data/pages/product-detail';
import { tempPage } from './mock-data/pages/temp';
import { activeTabItems, product, productBaseData, productClassifications } from './mock-data/products/product';
import { productReferences } from './mock-data/products/product-references';
import { productReviewSubmit, productReviews } from './mock-data/products/product-reviews';
import { searchSuggestions } from './mock-data/search/search-suggestions';
import { translations } from './mock-data/translations/translations';
import { Environment } from './types';

export function getDefaultHandlers(environment: Environment): RestHandler[] {
  const routes = getDefaultRoutes(environment);

  return [
    /**
     * General Calls ***************************************************************************************************
     */
    rest.get(routes.baseSites, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(baseSites()));
    }),

    // general calls to get options for several data types
    rest.get(routes.languages, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(languages()));
    }),

    rest.get(routes.currencies, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(currencies()));
    }),

    rest.get(routes.titles, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(titles()));
    }),

    // call to get all title options
    rest.get(routes.countries, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(countries()));
    }),

    rest.get(routes.regions, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(regions()));
    }),

    rest.get(routes.consentTemplates, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(consentTemplates()));
    }),

    // custom call to return the translation files
    rest.get(routes.i18n, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const language = typeof req.params['language'] === 'string' ? req.params['language'] : '';
      const namespace = typeof req.params['namespace'] === 'string' ? req.params['namespace'] : '';

      return res(ctx.status(200), ctx.json(translations(language, namespace)));
    }),

    /**
     * User related calls **********************************************************************************************
     */

    // user based calls
    rest.get(routes.notificationPreferences, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(notificationPreferences()));
    }),

    rest.get(routes.productInterests, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(productInterests()));
    }),

    rest.get(routes.customerCoupons, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(customerCoupons()));
    }),

    rest.get(routes.addresses, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(availableAddresses()));
    }),

    rest.get(routes.payments, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(payments()));
    }),

    rest.post(routes.addressVerification, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(
        ctx.status(201),
        ctx.json({
          decision: 'ACCEPT',
        })
      );
    }),

    // authentication call to return the user token
    rest.post(routes.authLogin, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(authToken()));
    }),

    // authentication call to revoke the user token
    rest.post(routes.authRevoke, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(authRevoke()));
    }),

    // user call to return the user details after login
    rest.get(routes.user, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(user(true)));
    }),

    // temp user call to return the user details after login
    rest.get(routes.userTemp, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(user(true)));
    }),

    // user call to register a new user
    rest.post(routes.users, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json(user(false)));
    }),

    /**
     * CMS Calls *******************************************************************************************************
     */

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

    /**
     * Product Calls ***************************************************************************************************
     */

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

    /**
     * Cart Calls ******************************************************************************************************
     */

    // cart call to return the cart details for a cart containing products
    rest.get(routes.cart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
      const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';
      const requestFields = req.url.searchParams?.get('fields') || '';

      if (requestFields.indexOf('deliveryAddress') > -1) {
        return res(ctx.status(201), ctx.json(getCheckoutDetails()));
      } else {
        return res(ctx.status(201), ctx.json(getCart(cartId, getUserTypeById(userId))));
      }
    }),

    // cart call to return multiple carts for normal cart, wishlist and saved cart
    rest.get(routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

      return res(ctx.status(200), ctx.json(getCarts(getUserTypeById(userId))));
    }),

    // post call to get either cart data for the different scopes
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

    rest.delete(routes.deleteCart, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      deleteCart();

      return res(ctx.status(201), ctx.json({}));
    }),

    rest.put(routes.addEmail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      setGuestCheckout(true);

      return res(ctx.status(200), ctx.json({}));
    }),

    // cart save call which is done, if the currently loggedIn user does not have a wishlist cart
    rest.patch(routes.saveCart, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
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

    /**
     * Checkout Calls **************************************************************************************************
     */
    rest.put(routes.setDeliveryAddress, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json({}));
    }),

    rest.post(routes.createDeliveryAddress, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const body = await req.json();
      return res(ctx.status(201), ctx.json(body));
    }),

    rest.delete(routes.removeDeliveryAddress, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json({}));
    }),

    rest.delete(routes.deliveryMode, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json({}));
    }),

    rest.put(routes.deliveryMode, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json({}));
    }),

    rest.get(routes.deliveryModes, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getDeliveryModes()));
    }),

    rest.get(routes.cardTypes, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getCardTypes()));
    }),

    rest.get(routes.paymentProviderSubInfo, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getPaymentSopRequest()));
    }),

    rest.post(routes.createPaymentDetails, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createPaymentDetails(true)));
    }),

    rest.put(routes.setCartPaymentDetails, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json({}));
    }),

    /**
     * Order Calls *****************************************************************************************************
     */
    rest.post(routes.placeOrder, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

      const responseData = createOrder(getUserTypeById(userId));

      setGuestCheckout(false);
      deleteCart();

      return res(ctx.status(200), ctx.json(responseData));
    }),

    rest.get(routes.orderHistory, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getOrders()));
    }),

    rest.get(routes.orderDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createOrder(CartUserType.OCC_USER_ID_CURRENT)));
    }),

    /*rest.post(routes.orderReturnsSubmit, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getOrderReturn()));
    }),

    rest.get(routes.orderReturns, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getOrderReturn()));
    }),

    rest.get(routes.orderReturnsSubmit, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getReturnRequestList(10)));
    }),

    rest.get(routes.returnListOfOrder, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const orderId = typeof req.params['orderId'] === 'string' ? req.params['orderId'] : '';

      return res(ctx.status(200), ctx.json(getReturnRequestList(faker.datatype.number({ min: 0, max: 5 }), orderId)));
    }),*/

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
  ];
}
