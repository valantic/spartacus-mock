import { getDefaultRoutes } from '@valantic/spartacus-mock';
import { HttpHandler, HttpResponse, http } from 'msw';
import { environment } from '../environments/environment';
import { languages } from './mock-data/languages/languages';

const defaultRoutes = getDefaultRoutes(environment);

export const handlers: HttpHandler[] = [
  /**
   * Example for a custom handler
   */
  /*http.get(defaultRoutes.languages, () => {
    return HttpResponse.json(languages());
  })*/
];
