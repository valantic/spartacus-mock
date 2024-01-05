import { HttpHandler, HttpResponse, http } from 'msw';
import { createOrder, createOrderHistory } from '../mock-data';
import { getOrders } from '../mock-data';
import {
  CartUserType,
  deleteCart,
  getCarts,
  getUserForCart,
  getUserTypeById,
  setGuestCheckout,
} from '../mock-data/commerce/cart';
import { readUrlParams } from '../utils';

export const getOrderHandlers = (routes: any): HttpHandler[] => {
  return [
    http.post(routes.placeOrder, ({ request, params }) => {
      const userId = readUrlParams(params, 'userId');
      const responseData = createOrder({ user: getUserForCart(getUserTypeById(userId)) });

      setGuestCheckout(false);
      deleteCart();

      return HttpResponse.json(responseData);
    }),

    http.get(routes.orderHistory, () => {
      return HttpResponse.json(getOrders());
    }),

    http.get(routes.orderDetail, () => {
      return HttpResponse.json(createOrder({ user: getUserForCart(CartUserType.OCC_USER_ID_CURRENT) }));
    }),

    /*rest.post(routes.orderReturnsSubmit, () => {
      return HttpResponse.json(getOrderReturn());
    }),

    rest.get(routes.orderReturns, () => {
      return HttpResponse.json(getOrderReturn());
    }),

    rest.get(routes.orderReturnsSubmit, () => {
      return HttpResponse.json(getReturnRequestList(10));
    }),

    rest.get(routes.returnListOfOrder, ({ params }) => {
      const orderId = readUrlParams(params, 'orderId');

      return HttpResponse.json(getReturnRequestList(faker.number.int({ min: 0, max: 5 }), orderId));
    }),*/
  ];
};
