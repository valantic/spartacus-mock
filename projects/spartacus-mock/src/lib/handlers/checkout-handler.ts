import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { getCardTypes, getDeliveryModes } from '../mock-data/commerce/checkout';
import { getPaymentSopRequest } from '../mock-data/commerce/payment-sop';
import { getPaymentSopResponse } from '../mock-data/commerce/payment-sop-response';
import { createPaymentDetails, DEFAULT_PAYMENT_ID } from '../mock-data/account/payments';

export const getCheckoutHandlers = (routes: any): RestHandler[] => {
  return [
    rest.put(routes.setDeliveryAddress, async (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201));
    }),

    rest.post(routes.createDeliveryAddress, async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const body = await req.json();
      return res(ctx.status(201), ctx.json(body));
    }),

    rest.delete(routes.removeDeliveryAddress, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201));
    }),

    rest.delete(routes.deliveryMode, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201));
    }),

    rest.put(routes.deliveryMode, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201));
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

    rest.post(routes.sopMockProcess, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.text(getPaymentSopResponse()));
    }),

    rest.post(routes.createPaymentDetails, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createPaymentDetails({ defaultPayment: true, id: DEFAULT_PAYMENT_ID })));
    }),

    rest.put(routes.setCartPaymentDetails, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json({}));
    }),
  ];
};
