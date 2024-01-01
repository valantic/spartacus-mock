import { HttpHandler, HttpResponse, http } from 'msw';
import {
  baseSites,
  consentTemplateList,
  countryList,
  currencyList,
  languageList,
  regionList,
  titleList,
  translationsForNamespace,
} from '../mock-data';
import { MockConfig } from '../types';
import { readUrlParams } from '../utils';

export const getBaseHandlers = (routes: any, config: MockConfig): HttpHandler[] => {
  return [
    http.get(routes.baseSites, () => {
      return HttpResponse.json(baseSites());
    }),

    http.get(routes.languages, () => {
      return HttpResponse.json(languageList());
    }),

    http.get(routes.currencies, () => {
      return HttpResponse.json(currencyList());
    }),

    http.get(routes.titles, () => {
      return HttpResponse.json(titleList());
    }),

    http.get(routes.countries, () => {
      return HttpResponse.json(countryList());
    }),

    http.get(routes.regions, () => {
      return HttpResponse.json(regionList());
    }),

    http.get(routes.consentTemplates, () => {
      return HttpResponse.json(consentTemplateList());
    }),

    // custom call to return the translation files
    http.get(routes.i18n, ({ params }) => {
      const language = readUrlParams(params, 'language');
      const namespace = readUrlParams(params, 'namespace');

      return HttpResponse.json(translationsForNamespace(language, namespace, config));
    }),
  ];
};
