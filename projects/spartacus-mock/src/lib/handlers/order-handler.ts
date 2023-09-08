import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { createOrder } from '../mock-data';
import { getOrders } from '../mock-data';
import {
  CartUserType,
  deleteCart,
  getUserForCart,
  getUserTypeById,
  setGuestCheckout,
} from '../mock-data/commerce/cart';
import { readUrlParams } from '../utils/request-params';

export const getOrderHandlers = (routes: any): RestHandler[] => {
  return [
    rest.post(routes.placeOrder, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const userId = readUrlParams(req, 'userId');
      const responseData = createOrder({ user: getUserForCart(getUserTypeById(userId)) });

      setGuestCheckout(false);
      deleteCart();

      return res(ctx.status(200), ctx.json(responseData));
    }),

    rest.get(routes.orderHistory, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(getOrders()));
    }),

    rest.get(routes.orderDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createOrder({ user: getUserForCart(CartUserType.OCC_USER_ID_CURRENT) })));
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
  ];
};
