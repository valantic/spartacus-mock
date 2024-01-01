import { HttpHandler, HttpResponse, http } from 'msw';
import { createAddress, createConsentTemplate, createUser, savedCartResult } from '../mock-data';
import { readSearchParams, readUrlParams } from '../utils';

export const getAccountHandlers = (routes: any): HttpHandler[] => {
  return [
    http.patch(routes.restoreSavedCart, ({ params }) => {
      const cartId = readUrlParams(params, 'cartId');
      const userId = readUrlParams(params, 'userId');

      return HttpResponse.json(savedCartResult(cartId, userId));
    }),
    http.post(routes.cloneSavedCart, ({ request, params }) => {
      const cartId = readUrlParams(params, 'cartId');
      const userId = readUrlParams(params, 'userId');
      const name = readSearchParams(request, 'name');

      return HttpResponse.json(savedCartResult(cartId, userId, name));
    }),
    http.get(routes.savedCart, ({ params }) => {
      const cartId = readUrlParams(params, 'cartId');
      const userId = readUrlParams(params, 'userId');

      return HttpResponse.json(savedCartResult(cartId, userId));
    }),
    http.patch(routes.addressDetail, () => {
      return HttpResponse.json({});
    }),
    http.delete(routes.addressDetail, () => {
      return HttpResponse.json({});
    }),
    http.post(routes.addresses, () => {
      return HttpResponse.json(createAddress(), { status: 201 });
    }),
    http.delete(routes.paymentDetail, () => {
      return HttpResponse.json({});
    }),
    http.patch(routes.users, () => {
      return HttpResponse.json(createUser());
    }),
    http.put(routes.userUpdatePassword, () => {
      return HttpResponse.json({});
    }),
    http.put(routes.userUpdateLoginId, () => {
      return HttpResponse.json({});
    }),
    http.delete(routes.consentDetail, () => {
      return HttpResponse.json({});
    }),
    http.post(routes.consents, () => {
      return HttpResponse.json(createConsentTemplate());
    }),
    http.delete(routes.users, () => {
      return HttpResponse.json({});
    }),
    http.patch(routes.notificationPreference, () => {
      return HttpResponse.json({});
    }),
  ];
};
