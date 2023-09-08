import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
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

export const getUserHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.notificationPreferences, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(notificationPreferenceList()));
    }),

    rest.get(routes.productInterests, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(productInterestSearchResult()));
    }),

    rest.get(routes.customerCoupons, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(customerCouponSearchResult()));
    }),

    rest.get(routes.addresses, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(addressList()));
    }),

    rest.get(routes.payments, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(paymentDetailsList()));
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
      return res(ctx.status(200), ctx.json(createAuthToken()));
    }),

    // authentication call to revoke the user token
    rest.post(routes.authRevoke, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(authRevoke()));
    }),

    // user call to return the user details after login
    rest.get(routes.user, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createUser()));
    }),

    // temp user call to return the user details after login
    rest.get(routes.userTemp, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createUser()));
    }),

    // user call to register a new user
    rest.post(routes.users, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json(createUser()));
    }),
  ];
};
