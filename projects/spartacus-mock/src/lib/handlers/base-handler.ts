import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import {
  baseSites,
  consentTemplateList,
  countryList,
  currencyList,
  languageList,
  regionList,
  titleList,
  translations,
} from '../mock-data';
import { MockConfig } from '../types';
import { readUrlParams } from '../utils';

export const getBaseHandlers = (routes: any, config: MockConfig): RestHandler[] => {
  return [
    rest.get(routes.baseSites, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(baseSites()));
    }),

    rest.get(routes.languages, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(languageList()));
    }),

    rest.get(routes.currencies, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(currencyList()));
    }),

    rest.get(routes.titles, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(titleList()));
    }),

    rest.get(routes.countries, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(countryList()));
    }),

    rest.get(routes.regions, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(regionList()));
    }),

    rest.get(routes.consentTemplates, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(consentTemplateList()));
    }),

    // custom call to return the translation files
    rest.get(routes.i18n, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const language = readUrlParams(req, 'language');
      const namespace = readUrlParams(req, 'namespace');

      return res(ctx.status(200), ctx.json(translations(language, namespace, config)));
    }),
  ];
};
