import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { createAddress } from '../mock-data';
import { savedCartResult } from '../mock-data';
import { createUser } from '../mock-data';
import { createConsentTemplate } from '../mock-data';
import { readSearchParams, readUrlParams } from '../utils/request-params';

export const getAccountHandlers = (routes: any): RestHandler[] => {
  return [
    rest.patch(routes.restoreSavedCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const userId = readUrlParams(req, 'userId');

      return res(ctx.status(200), ctx.json(savedCartResult(cartId, userId)));
    }),
    rest.post(routes.cloneSavedCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const userId = readUrlParams(req, 'userId');
      const name = readSearchParams(req, 'name');

      return res(ctx.status(200), ctx.json(savedCartResult(cartId, userId, name)));
    }),
    rest.get(routes.savedCart, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const cartId = readUrlParams(req, 'cartId');
      const userId = readUrlParams(req, 'userId');

      return res(ctx.status(200), ctx.json(savedCartResult(cartId, userId)));
    }),
    rest.patch(routes.addressDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.delete(routes.addressDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.post(routes.addresses, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(201), ctx.json(createAddress()));
    }),
    rest.delete(routes.paymentDetail, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.patch(routes.users, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createUser()));
    }),
    rest.put(routes.userUpdatePassword, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.put(routes.userUpdateLoginId, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.delete(routes.consentDetail, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.post(routes.consents, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(createConsentTemplate()));
    }),
    rest.delete(routes.users, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
    rest.patch(routes.notificationPreference, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200));
    }),
  ];
};
