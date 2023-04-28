import { faker } from '@faker-js/faker';
import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { getDefaultRoutes } from './defaultRoutes';
import { createAddress } from './mock-data/account/addresses';
import { createPaymentDetails, DEFAULT_PAYMENT_ID } from './mock-data/account/payments';
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
import { getPaymentSopResponse } from './mock-data/commerce/payment-sop-response';
import { addVoucher, deleteVoucher } from './mock-data/commerce/voucher';
import {
  components,
  footerLinkComponents,
  myAccountLinkComponents,
  navMainLinkComponents,
  productDetailTabComponents,
} from './mock-data/components/components';
import { createConsentTemplate } from './mock-data/consent-templates/consent-templates';
import { createOrder } from './mock-data/order/order';
import { getOrders } from './mock-data/order/order-history';
import { product, productBaseData, productClassifications } from './mock-data/products/product';
import { productReferences } from './mock-data/products/product-references';
import { productReviewSubmit, productReviews } from './mock-data/products/product-reviews';
import { productSearch } from './mock-data/products/product-search';
import { searchSuggestions } from './mock-data/search/search-suggestions';
import { Environment } from './types';
import { savedCartResult } from './mock-data/account/saved-cart';
import { updateLocalStorage } from './defaultLocalStorage';
import { store, stores, storesAndRegionsStoreCount } from './mock-data/store-finder/store-finder';
import { getMockPage } from './utils/mock-page';
import { getBaseHandlers } from './handlers/base-handler';
import { getUserHandlers } from './handlers/user-handler';
import { createUser } from './mock-data/auth/user';
import { getCmsHandlers } from './handlers/cms-handler';

export class DefaultHandlers {
  readonly routes;

  constructor(protected environment: Environment) {
    this.routes = getDefaultRoutes(environment);
  }

  getSearchHandlers(): RestHandler[] {
    return [
      rest.get(this.routes.searchSuggestions, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const term = req.url.searchParams.get('term') || '';
        const max = req.url.searchParams.get('max') || '';

        return res(ctx.status(200), ctx.json(searchSuggestions(term, parseInt(max))));
      }),
    ];
  }

  getProductHandlers(): RestHandler[] {
    return [
      // product references call
      rest.get(this.routes.productReferences, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const referenceType = req.url.searchParams.get('referenceType') || '';

        return res(ctx.status(200), ctx.json(productReferences(referenceType, faker.datatype.number(100))));
      }),

      // product reviews call
      rest.get(this.routes.productReviews, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(productReviews()));
      }),

      rest.post(this.routes.productReviews, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(productReviewSubmit()));
      }),

      rest.get(this.routes.productSearch, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const query = req.url.searchParams.get('query') || '';
        const pageSize = parseInt(req.url.searchParams.get('pageSize') || '');
        const sort = req.url.searchParams.get('sort') || '';
        const currentPage = parseInt(req.url.searchParams.get('currentPage') || '0');

        return res(ctx.status(200), ctx.json(productSearch(query, pageSize, sort, currentPage, pageSize === 5)));
      }),

      // product general data call (used for product call scopes default / list / details)
      rest.get(this.routes.product, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
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
    ];
  }

  getCartHandlers(): RestHandler[] {
    return [
      // cart call to return the cart details for a cart containing products
      rest.get(this.routes.cart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
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
      rest.get(this.routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

        return res(ctx.status(200), ctx.json(getCarts(getUserTypeById(userId))));
      }),

      // post call to get either cart data for the different scopes
      rest.post(this.routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';
        let cartId = '';

        // oldCartId is only present if the call is done after login to merge the anonymous cart with the user cart
        const oldCartId = req.url.searchParams?.get('oldCartId') || '';

        if (oldCartId) {
          cartId = '8e2cb9e8-406e-4746-a398-f663a88730f3';
        }

        return res(ctx.status(201), ctx.json(getCart(cartId, getUserTypeById(userId))));
      }),

      // patch call to save a cart
      rest.patch(this.routes.cart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        console.log('FOO');
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';
        const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';

        return res(
          ctx.status(200),
          ctx.json({
            savedCartData: getCart(cartId, getUserTypeById(userId)),
          })
        );
      }),

      // cart post call to add entries to the cart
      rest.post(this.routes.addEntries, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const { quantity, product } = await req.json();

        return res(ctx.status(201), ctx.json(addToCart(product, quantity)));
      }),

      // cart patch call to update entries in the cart
      rest.patch(this.routes.updateEntries, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
        const entryNumber = parseInt(typeof req.params['entryNumber'] === 'string' ? req.params['entryNumber'] : '');
        const { quantity } = await req.json();

        return res(ctx.status(200), ctx.json(updateEntries(cartId, entryNumber, quantity)));
      }),

      // cart delete call to update entries in the cart
      rest.delete(this.routes.removeEntries, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
        const entryNumber = parseInt(typeof req.params['entryNumber'] === 'string' ? req.params['entryNumber'] : '');

        removeEntries(cartId, entryNumber);
        return res(ctx.status(200));
      }),

      rest.delete(this.routes.deleteCart, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        deleteCart();

        return res(ctx.status(201));
      }),

      rest.put(this.routes.addEmail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        setGuestCheckout(true);

        return res(ctx.status(200), ctx.json({}));
      }),

      // cart save call which is done, if the currently loggedIn user does not have a wishlist cart
      rest.patch(this.routes.saveCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const name = req.url.searchParams?.get('saveCartName') || '';
        const description = req.url.searchParams?.get('saveCartDescription') || '';

        // Clears the active cart
        setTimeout(() => updateLocalStorage('activeCartEntries', []));
        return res(
          ctx.status(201),
          ctx.json({
            savedCartData: {
              ...getCart('', CartUserType.OCC_USER_ID_CURRENT),
              name,
              description,
            },
          })
        );
      }),

      rest.post(this.routes.cartVoucher, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const voucherId = req.url.searchParams?.get('voucherId') || '';

        addVoucher(voucherId);
        return res(ctx.status(200));
      }),

      rest.delete(this.routes.cartVoucherRemove, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const voucherCode = typeof req.params['voucherCode'] === 'string' ? req.params['voucherCode'] : '';

        deleteVoucher(voucherCode);
        return res(ctx.status(200));
      }),
    ];
  }

  getCheckoutHandlers(): RestHandler[] {
    return [
      rest.put(
        this.routes.setDeliveryAddress,
        async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
          return res(ctx.status(201));
        }
      ),

      rest.post(
        this.routes.createDeliveryAddress,
        async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
          const body = await req.json();
          return res(ctx.status(201), ctx.json(body));
        }
      ),

      rest.delete(
        this.routes.removeDeliveryAddress,
        (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
          return res(ctx.status(201));
        }
      ),

      rest.delete(this.routes.deliveryMode, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(201));
      }),

      rest.put(this.routes.deliveryMode, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(201));
      }),

      rest.get(this.routes.deliveryModes, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getDeliveryModes()));
      }),

      rest.get(this.routes.cardTypes, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getCardTypes()));
      }),

      rest.get(this.routes.paymentProviderSubInfo, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getPaymentSopRequest()));
      }),

      rest.post(this.routes.sopMockProcess, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.text(getPaymentSopResponse()));
      }),

      rest.post(this.routes.createPaymentDetails, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(createPaymentDetails({ defaultPayment: true, id: DEFAULT_PAYMENT_ID })));
      }),

      rest.put(this.routes.setCartPaymentDetails, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json({}));
      }),
    ];
  }

  getOrderHandlers(): RestHandler[] {
    return [
      rest.post(this.routes.placeOrder, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

        const responseData = createOrder(getUserTypeById(userId));

        setGuestCheckout(false);
        deleteCart();

        return res(ctx.status(200), ctx.json(responseData));
      }),

      rest.get(this.routes.orderHistory, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getOrders()));
      }),

      rest.get(this.routes.orderDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(createOrder(CartUserType.OCC_USER_ID_CURRENT)));
      }),

      /*rest.post(this.routes.orderReturnsSubmit, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getOrderReturn()));
      }),

      rest.get(this.routes.orderReturns, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getOrderReturn()));
      }),

      rest.get(this.routes.orderReturnsSubmit, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(getReturnRequestList(10)));
      }),

      rest.get(this.routes.returnListOfOrder, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const orderId = typeof req.params['orderId'] === 'string' ? req.params['orderId'] : '';

        return res(ctx.status(200), ctx.json(getReturnRequestList(faker.datatype.number({ min: 0, max: 5 }), orderId)));
      }),*/
    ];
  }

  getAccountHandlers(): RestHandler[] {
    return [
      rest.patch(this.routes.restoreSavedCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

        return res(ctx.status(200), ctx.json(savedCartResult(cartId, userId)));
      }),
      rest.post(this.routes.cloneSavedCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';
        const name = req.url.searchParams?.get('name') || '';

        return res(ctx.status(200), ctx.json(savedCartResult(cartId, userId, name)));
      }),
      rest.get(this.routes.savedCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        const cartId = typeof req.params['cartId'] === 'string' ? req.params['cartId'] : '';
        const userId = typeof req.params['userId'] === 'string' ? req.params['userId'] : '';

        return res(ctx.status(200), ctx.json(savedCartResult(cartId, userId)));
      }),
      rest.patch(this.routes.addressDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.delete(this.routes.addressDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.post(this.routes.addresses, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(201), ctx.json(createAddress()));
      }),
      rest.delete(this.routes.paymentDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.patch(this.routes.users, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(createUser()));
      }),
      rest.put(this.routes.userUpdatePassword, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.put(this.routes.userUpdateLoginId, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.delete(this.routes.consentDetail, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.post(this.routes.consents, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(createConsentTemplate()));
      }),
      rest.delete(this.routes.users, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
      rest.patch(this.routes.notificationPreference, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200));
      }),
    ];
  }

  getStoreFinderHandlers(): RestHandler[] {
    return [
      rest.get(this.routes.storescounts, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(storesAndRegionsStoreCount()));
      }),

      rest.get(this.routes.stores, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(stores()));
      }),

      rest.get(this.routes.store, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
        return res(ctx.status(200), ctx.json(store()));
      }),
    ];
  }

  getAllHandlers(): RestHandler[] {
    return [
      ...getBaseHandlers(this.routes),
      ...getUserHandlers(this.routes),
      ...getCmsHandlers(this.routes),
      ...this.getSearchHandlers(),
      ...this.getProductHandlers(),
      ...this.getCartHandlers(),
      ...this.getCheckoutHandlers(),
      ...this.getOrderHandlers(),
      ...this.getAccountHandlers(),
      ...this.getStoreFinderHandlers(),
    ];
  }
}
