import { HttpHandler, HttpResponse, http } from 'msw';
import { DEFAULT_PAYMENT_ID, createPaymentDetails } from '../mock-data';
import { getCardTypes, getDeliveryModes } from '../mock-data/commerce/checkout';
import { getPaymentSopRequest } from '../mock-data/commerce/payment-sop';
import { getPaymentSopResponse } from '../mock-data/commerce/payment-sop-response';

export const getCheckoutHandlers = (routes: any): HttpHandler[] => {
  return [
    http.put(routes.setDeliveryAddress, async () => {
      return HttpResponse.json({}, { status: 201 });
    }),

    http.post(routes.createDeliveryAddress, async ({ request }) => {
      const body = await request.json();
      return HttpResponse.json(body, { status: 201 });
    }),

    http.delete(routes.removeDeliveryAddress, () => {
      return HttpResponse.json({}, { status: 201 });
    }),

    http.delete(routes.deliveryMode, () => {
      return HttpResponse.json({}, { status: 201 });
    }),

    http.put(routes.deliveryMode, () => {
      return HttpResponse.json({}, { status: 201 });
    }),

    http.get(routes.deliveryModes, () => {
      return HttpResponse.json(getDeliveryModes());
    }),

    http.get(routes.cardTypes, () => {
      return HttpResponse.json(getCardTypes());
    }),

    http.get(routes.paymentProviderSubInfo, () => {
      return HttpResponse.json(getPaymentSopRequest());
    }),

    http.post(routes.sopMockProcess, () => {
      return HttpResponse.json(getPaymentSopResponse());
    }),

    http.post(routes.createPaymentDetails, () => {
      return HttpResponse.json(createPaymentDetails({ defaultPayment: true, id: DEFAULT_PAYMENT_ID }));
    }),

    http.put(routes.setCartPaymentDetails, () => {
      return HttpResponse.json({});
    }),
  ];
};
