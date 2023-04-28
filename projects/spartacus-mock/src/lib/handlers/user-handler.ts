import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { notificationPreferences } from '../mock-data/account/notification-preferences';
import { productInterests } from '../mock-data/account/product-interests';
import { customerCoupons } from '../mock-data/account/customer-coupons';
import { addresses } from '../mock-data/account/addresses';
import { paymentDetailsList } from '../mock-data/account/payments';
import { authRevoke, createAuthToken } from '../mock-data/auth/auth';
import { createUser } from '../mock-data/auth/user';

export const getUserHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.notificationPreferences, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(notificationPreferences()));
    }),

    rest.get(routes.productInterests, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(productInterests()));
    }),

    rest.get(routes.customerCoupons, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(customerCoupons()));
    }),

    rest.get(routes.addresses, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(addresses()));
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
