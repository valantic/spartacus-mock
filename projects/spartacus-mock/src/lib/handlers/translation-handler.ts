import { HttpHandler, HttpResponse, http } from 'msw';
import { translationsForNamespace } from '../mock-data';
import { MockConfig } from '../types';
import { readUrlParams } from '../utils';

export const getTranslationHandlers = (routes: any, config: MockConfig): HttpHandler[] => {
  return [
    // custom call to return the translation files
    http.get(routes.i18n, ({ params }) => {
      const language = readUrlParams(params, 'language');
      const namespace = readUrlParams(params, 'namespace');

      return HttpResponse.json(translationsForNamespace(language, namespace, config));
    }),
  ];
};
