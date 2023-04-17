import { Environment } from './types';
import { defaultOccCartConfig } from './occ-config/default-occ-cart-config';

/**
 * TODO use endpoints from default configs
 *
 * defaultOccCartConfig
 * defaultOccCheckoutConfig
 * defaultOccOrderConfig
 * defaultOccAccountSummaryConfig
 * defaultOccStoreFinderConfig
 * defaultOccUserAccountConfig
 * defaultOccUserProfileConfig
 * defaultOccProductConfig
 * defaultOccSiteContextConfig
 * defaultOccUserConfig
 */

const i18nEndpoint = 'i18n/${language}/${namespace}';

// TODO find a way to not need the any cast
const cartEndpoints = defaultOccCartConfig.backend?.occ?.endpoints as any;

export function getDefaultRoutes (environment: Environment) {
  const occEndpoint = `${environment.backend.occ?.baseUrl}${environment.backend.occ?.prefix}`;

  // TODO Take all endpoints from the defaultXxx configs above
  return {
    baseSites: `${occEndpoint}basesites`,
    languages: `${occEndpoint}:baseSiteId/languages`,
    currencies: `${occEndpoint}:baseSiteId/currencies`,
    consentTemplates: `${occEndpoint}:baseSiteId/users/anonymous/consenttemplates`,
    pages: `${occEndpoint}:baseSiteId/cms/pages`,
    components: `${occEndpoint}:baseSiteId/cms/components`,
    authLogin: '*/authorizationserver/oauth/token',
    authRevoke: '*/authorizationserver/oauth/revoke',
    users: `${occEndpoint}:baseSiteId/users/:user`,
    usersTemp: `${occEndpoint}users/:user`,
    titles: `${occEndpoint}:baseSiteId/titles`,
    countries: `${occEndpoint}:baseSiteId/countries`,
    notificationPreferences: `${occEndpoint}:baseSiteId/users/:user/notificationpreferences`,
    productInterests: `${occEndpoint}:baseSiteId/users/:user/productinterests`,

    i18n: `${occEndpoint}:baseSiteId/${i18nEndpoint.split('?')[0].replace('${language}', ':language').replace('${namespace}', ':namespace')}`,

    // cart
    carts: `${occEndpoint}:baseSiteId/${cartEndpoints?.carts.split('?')[0]}`.replace('${userId}', ':userId'),
    cart: `${occEndpoint}:baseSiteId/${cartEndpoints?.cart.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),
    addEntries: `${occEndpoint}:baseSiteId/${cartEndpoints?.addEntries.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),
    updateEntries: `${occEndpoint}:baseSiteId/${cartEndpoints?.updateEntries.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId').replace('${entryNumber}', ':entryNumber'),
    removeEntries: `${occEndpoint}:baseSiteId/${cartEndpoints?.removeEntries.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId').replace('${entryNumber}', ':entryNumber'),
    deleteCart: `${occEndpoint}:baseSiteId/${cartEndpoints?.deleteCart.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),
    cartVoucher: `${occEndpoint}:baseSiteId/${cartEndpoints?.cartVoucher.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),
    cartVoucherRemove: `${occEndpoint}:baseSiteId/${cartEndpoints?.cartVoucher.split('?')[0]}/:voucherCode`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),
    validate: `${occEndpoint}:baseSiteId/${cartEndpoints?.validate.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),
    saveCart: `${occEndpoint}:baseSiteId/${cartEndpoints.saveCart.split('?')[0]}`.replace('${userId}', ':userId').replace('${cartId}', ':cartId'),

    // product
    productReferences: `${occEndpoint}:baseSiteId/products/:productCode/references`,
    productDocuments: `${occEndpoint}:baseSiteId/products/:productCode/documents`,
    productMainFeatures: `${occEndpoint}:baseSiteId/products/:productCode/mainFeatures`,
    productCompatibleModels: `${occEndpoint}:baseSiteId/products/:productCode/compatibleModels`,
    productReviews: `${occEndpoint}:baseSiteId/products/:productCode/reviews`,
    productSelection: `${occEndpoint}:baseSiteId/products/:productCode/productSelection/:selection`,
    product: `${occEndpoint}:baseSiteId/products/:productCode`,

    // search
    searchSuggestions: `${occEndpoint}:baseSiteId/products/suggestions`,
  };
}
