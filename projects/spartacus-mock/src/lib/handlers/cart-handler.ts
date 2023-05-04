import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { getCheckoutDetails } from '../mock-data/commerce/checkout';
import {
  addToCart,
  CartUserType,
  deleteCart,
  getCart,
  getCarts,
  getUserTypeById,
  removeEntries,
  setGuestCheckout,
  updateEntries,
} from '../mock-data/commerce/cart';
import { updateLocalStorage } from '../defaultLocalStorage';
import { addVoucher, deleteVoucher } from '../mock-data/commerce/voucher';
import { readSearchParams, readUrlParams } from '../utils/request-params';

export const getCartHandlers = (routes: any): RestHandler[] => {
  return [
    // cart call to return the cart details for a cart containing products
    rest.get(routes.cart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const userId = readUrlParams(req, 'userId');
      const requestFields = readSearchParams(req, 'fields');

      if (requestFields.indexOf('deliveryAddress') > -1) {
        return res(ctx.status(201), ctx.json(getCheckoutDetails()));
      } else {
        return res(ctx.status(201), ctx.json(getCart(cartId, getUserTypeById(userId))));
      }
    }),

    // cart call to return multiple carts for normal cart, wishlist and saved cart
    rest.get(routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = readUrlParams(req, 'userId');

      return res(ctx.status(200), ctx.json(getCarts(getUserTypeById(userId))));
    }),

    // post call to get either cart data for the different scopes
    rest.post(routes.carts, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = readUrlParams(req, 'userId');
      let cartId = '';

      // oldCartId is only present if the call is done after login to merge the anonymous cart with the user cart
      const oldCartId = readSearchParams(req, 'oldCartId');

      if (oldCartId) {
        cartId = '8e2cb9e8-406e-4746-a398-f663a88730f3';
      }

      return res(ctx.status(201), ctx.json(getCart(cartId, getUserTypeById(userId))));
    }),

    // patch call to save a cart
    rest.patch(routes.cart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const userId = readUrlParams(req, 'userId');

      return res(
        ctx.status(200),
        ctx.json({
          savedCartData: getCart(cartId, getUserTypeById(userId)),
        })
      );
    }),

    // cart post call to add entries to the cart
    rest.post(routes.addEntries, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const { quantity, product } = await req.json();

      return res(ctx.status(201), ctx.json(addToCart(product, quantity)));
    }),

    // cart patch call to update entries in the cart
    rest.patch(routes.updateEntries, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const entryNumber = parseInt(readUrlParams(req, 'entryNumber'));
      const { quantity } = await req.json();

      return res(ctx.status(200), ctx.json(updateEntries(cartId, entryNumber, quantity)));
    }),

    // cart delete call to update entries in the cart
    rest.delete(routes.removeEntries, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const entryNumber = parseInt(readUrlParams(req, 'entryNumber'));

      removeEntries(cartId, entryNumber);
      return res(ctx.status(200));
    }),

    rest.delete(routes.deleteCart, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      deleteCart();

      return res(ctx.status(201));
    }),

    rest.put(routes.addEmail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      setGuestCheckout(true);

      return res(ctx.status(200), ctx.json({}));
    }),

    // cart save call which is done, if the currently loggedIn user does not have a wishlist cart
    rest.patch(routes.saveCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const name = readSearchParams(req, 'saveCartName');
      const description = readSearchParams(req, 'saveCartDescription');

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

    rest.post(routes.cartVoucher, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const voucherId = readSearchParams(req, 'voucherId');

      addVoucher(voucherId);
      return res(ctx.status(200));
    }),

    rest.delete(routes.cartVoucherRemove, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const voucherCode = readUrlParams(req, 'voucherCode');

      deleteVoucher(voucherCode);
      return res(ctx.status(200));
    }),
  ];
};