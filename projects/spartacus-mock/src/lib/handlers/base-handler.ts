import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { baseSites, languages } from '../mock-data';
import { currencies } from '../mock-data/general/currencies';
import { titles } from '../mock-data/general/titles';
import { countries } from '../mock-data/general/countries';
import { regions } from '../mock-data/general/regions';
import { consentTemplates } from '../mock-data/consent-templates/consent-templates';
import { translations } from '../mock-data/translations/translations';
import { readUrlParams } from '../utils/request-params';

export const getBaseHandlers = (routes: any): RestHandler[] => {
  return [
    rest.get(routes.baseSites, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(baseSites()));
    }),

    rest.get(routes.languages, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(languages()));
    }),

    rest.get(routes.currencies, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(currencies()));
    }),

    rest.get(routes.titles, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(titles()));
    }),

    rest.get(routes.countries, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(countries()));
    }),

    rest.get(routes.regions, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(regions()));
    }),

    rest.get(routes.consentTemplates, (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(consentTemplates()));
    }),

    // TODO: Check if we can import custom translations and languages via config
    // custom call to return the translation files
    rest.get(routes.i18n, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const language = readUrlParams(req, 'language');
      const namespace = readUrlParams(req, 'namespace');

      return res(ctx.status(200), ctx.json(translations(language, namespace)));
    }),
  ];
};
