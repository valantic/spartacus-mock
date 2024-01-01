import { HttpHandler, HttpResponse, PathParams, StrictRequest, http } from 'msw';
import { LocalStorageService } from '../local-storage';
import { addVoucher, deleteVoucher } from '../mock-data';
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
} from '../mock-data/commerce/cart';
import { getCheckoutDetails } from '../mock-data/commerce/checkout';
import { readSearchParams, readUrlParams } from '../utils';

export const getCartHandlers = (routes: any, localStorageService: LocalStorageService): HttpHandler[] => {
  return [
    // cart call to return the cart details for a cart containing products
    http.get(routes.cart, ({ request, params }) => {
      const cartId = readUrlParams(params, 'cartId');
      const userId = readUrlParams(params, 'userId');
      const requestFields = readSearchParams(request, 'fields');

      if (requestFields && requestFields.indexOf('deliveryAddress') > -1) {
        return HttpResponse.json(getCheckoutDetails(), { status: 201 });
      } else {
        return HttpResponse.json(getCart(cartId, getUserTypeById(userId)), { status: 201 });
      }
    }),

    // cart call to return multiple carts for normal cart, wishlist and saved cart
    http.get(routes.carts, ({ params }) => {
      const userId = readUrlParams(params, 'userId');

      return HttpResponse.json(getCarts(getUserTypeById(userId)));
    }),

    // post call to get either cart data for the different scopes
    http.post(routes.carts, ({ request, params }) => {
      const userId = readUrlParams(params, 'userId');
      let cartId = '';

      // oldCartId is only present if the call is done after login to merge the anonymous cart with the user cart
      const oldCartId = readSearchParams(request, 'oldCartId');

      if (oldCartId) {
        cartId = '8e2cb9e8-406e-4746-a398-f663a88730f3';
      }

      return HttpResponse.json(getCart(cartId, getUserTypeById(userId)), { status: 201 });
    }),

    // patch call to save a cart
    http.patch(routes.cart, ({ params }) => {
      const cartId = readUrlParams(params, 'cartId');
      const userId = readUrlParams(params, 'userId');

      return HttpResponse.json({ savedCartData: getCart(cartId, getUserTypeById(userId)) });
    }),

    // cart post call to add entries to the cart
    http.post(
      routes.addEntries,
      async ({ request }: { request: StrictRequest<{ quantity: number; product: { code: string } }> }) => {
        const { quantity, product } = await request.json();

        return HttpResponse.json(addToCart(product, quantity), { status: 201 });
      }
    ),

    // cart patch call to update entries in the cart
    http.patch(
      routes.updateEntries,
      async ({ request, params }: { request: StrictRequest<{ quantity: number }>; params: PathParams }) => {
        const cartId = readUrlParams(params, 'cartId');
        const entryNumber = parseInt(readUrlParams(params, 'entryNumber'));
        const { quantity } = await request.json();

        return HttpResponse.json(updateEntries(cartId, entryNumber, quantity));
      }
    ),

    // cart delete call to update entries in the cart
    http.delete(routes.removeEntries, ({ params }) => {
      const cartId = readUrlParams(params, 'cartId');
      const entryNumber = parseInt(readUrlParams(params, 'entryNumber'));

      removeEntries(cartId, entryNumber);
      return HttpResponse.json({});
    }),

    http.delete(routes.deleteCart, async () => {
      deleteCart();

      return HttpResponse.json({}, { status: 201 });
    }),

    http.put(routes.addEmail, () => {
      setGuestCheckout(true);

      return HttpResponse.json({});
    }),

    // cart save call which is done, if the currently loggedIn user does not have a wishlist cart
    http.patch(routes.saveCart, ({ request }) => {
      const name = readSearchParams(request, 'saveCartName');
      const description = readSearchParams(request, 'saveCartDescription');

      // Clears the active cart
      setTimeout(() => localStorageService.updateLocalStorage('activeCartEntries', []));

      return HttpResponse.json(
        {
          savedCartData: {
            ...getCart('', CartUserType.OCC_USER_ID_CURRENT),
            name,
            description,
          },
        },
        { status: 201 }
      );
    }),

    http.post(routes.cartVoucher, ({ request }) => {
      const voucherId = readSearchParams(request, 'voucherId');

      addVoucher(voucherId || '');
      return HttpResponse.json({});
    }),

    http.delete(routes.cartVoucherRemove, ({ params }) => {
      const voucherCode = readUrlParams(params, 'voucherCode');

      deleteVoucher(voucherCode);
      return HttpResponse.json({});
    }),
  ];
};
