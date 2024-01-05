import { environment } from '../environments/environment';

const occEndpoint = environment.backend.occ.baseUrl;
const occPrefix = environment.backend.occ.prefix;

/**
 * Additional custom routes
 */
export const routes = {
  // add your custom routes here
  /**
   * Route Example, endpoints should be an object containing your custom endpoints
   * The endpoint is splitted by ? to remove the query params as msw handlers must not contain query params
   * Spartacus Path Variables like ${productCode} are replaced by :productCode to make them recognizable by msw
   **/
  /*
   customRoute: `${occEndpoint}${occPrefix}:baseSiteId/${endpoints.customRoute.split('?')[0]}`.replace(
     '${productCode}',
     ':productCode'
   ),
   */
};
