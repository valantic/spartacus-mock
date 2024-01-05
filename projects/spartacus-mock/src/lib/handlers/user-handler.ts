import { HttpHandler, HttpResponse, http } from 'msw';
import {
  addressList,
  authRevoke,
  createAuthToken,
  createUser,
  customerCouponSearchResult,
  notificationPreferenceList,
  paymentDetailsList,
  productInterestSearchResult,
} from '../mock-data';

export const getUserHandlers = (routes: any): HttpHandler[] => {
  return [
    http.get(routes.notificationPreferences, () => {
      return HttpResponse.json(notificationPreferenceList());
    }),

    http.get(routes.productInterests, () => {
      return HttpResponse.json(productInterestSearchResult());
    }),

    http.get(routes.customerCoupons, () => {
      return HttpResponse.json(customerCouponSearchResult());
    }),

    http.get(routes.addresses, () => {
      return HttpResponse.json(addressList());
    }),

    http.get(routes.payments, () => {
      return HttpResponse.json(paymentDetailsList());
    }),

    http.post(routes.addressVerification, () => {
      return HttpResponse.json({ decision: 'ACCEPT' });
    }),

    // authentication call to return the user token
    http.post(routes.authLogin, () => {
      return HttpResponse.json(createAuthToken());
    }),

    // authentication call to revoke the user token
    http.post(routes.authRevoke, () => {
      return HttpResponse.json(authRevoke());
    }),

    // user call to return the user details after login
    http.get(routes.user, () => {
      return HttpResponse.json(createUser());
    }),

    // temp user call to return the user details after login
    http.get(routes.userTemp, () => {
      return HttpResponse.json(createUser());
    }),

    // user call to register a new user
    http.post(routes.users, () => {
      return HttpResponse.json(createUser());
    }),
  ];
};
