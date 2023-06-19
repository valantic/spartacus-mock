import { ResponseComposition, RestContext, RestHandler, RestRequest, rest } from 'msw';
import { baseSites, languageList } from '../mock-data';
import { consentTemplateList } from '../mock-data';
import { countryList } from '../mock-data';
import { currencyList } from '../mock-data';
import { regionList } from '../mock-data';
import { titleList } from '../mock-data';
import { translations } from '../mock-data/translations/translations';
import { readUrlParams } from '../utils/request-params';

export const getBaseHandlers = (routes: any): RestHandler[] => {
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

    // TODO: Check if we can import custom translations and languages via config
    // custom call to return the translation files
    rest.get(routes.i18n, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      const language = readUrlParams(req, 'language');
      const namespace = readUrlParams(req, 'namespace');

      return res(ctx.status(200), ctx.json(translations(language, namespace)));
    }),
  ];
};
