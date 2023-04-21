import { Environment } from './types';
import { occCartConfig } from './occ-config/occ-cart-config';
import { occCheckoutConfig } from './occ-config/occ-checkout-config';
import { occOrderConfig } from './occ-config/occ-order-config';
import { occSavedCartConfig } from './occ-config/occ-saved-cart-config';

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

const cartEndpoints = occCartConfig.backend.occ.endpoints;
const checkoutEndpoints = occCheckoutConfig.backend.occ.endpoints;
const orderEndpoints = occOrderConfig.backend.occ.endpoints;
const savedCartEndpoints = occSavedCartConfig.backend?.occ?.endpoints;

export function getDefaultRoutes(environment: Environment) {
  const occEndpoint = `${environment.backend.occ?.baseUrl}${environment.backend.occ?.prefix}`;

  // TODO Take all endpoints from the defaultXxx configs above
  return {
    baseSites: `${occEndpoint}basesites`,
    languages: `${occEndpoint}:baseSiteId/languages`,
    currencies: `${occEndpoint}:baseSiteId/currencies`,
    pages: `${occEndpoint}:baseSiteId/cms/pages`,
    components: `${occEndpoint}:baseSiteId/cms/components`,
    authLogin: '*/authorizationserver/oauth/token',
    authRevoke: '*/authorizationserver/oauth/revoke',
    users: `${occEndpoint}:baseSiteId/users/:user`,
    usersTemp: `${occEndpoint}users/:user`,
    titles: `${occEndpoint}:baseSiteId/titles`,
    countries: `${occEndpoint}:baseSiteId/countries`,
    consentTemplates: `${occEndpoint}:baseSiteId/users/:user/consenttemplates`,
    notificationPreferences: `${occEndpoint}:baseSiteId/users/:user/notificationpreferences`,
    productInterests: `${occEndpoint}:baseSiteId/users/:user/productinterests`,
    customerCoupons: `${occEndpoint}:baseSiteId/users/:user/customercoupons`,
    addresses: `${occEndpoint}:baseSiteId/users/:user/addresses`,
    payments: `${occEndpoint}:baseSiteId/users/:user/paymentDetails`,
    addressVerification: `${occEndpoint}:baseSiteId/users/:user/addresses/verification`,

    i18n: `${occEndpoint}:baseSiteId/${i18nEndpoint
      .split('?')[0]
      .replace('${language}', ':language')
      .replace('${namespace}', ':namespace')}`,

    // cart
    carts: `${occEndpoint}:baseSiteId/${(cartEndpoints.carts as string).split('?')[0]}`.replace('${userId}', ':userId'),
    cart: `${occEndpoint}:baseSiteId/${(cartEndpoints.cart as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    addEntries: `${occEndpoint}:baseSiteId/${(cartEndpoints.addEntries as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    updateEntries: `${occEndpoint}:baseSiteId/${(cartEndpoints.updateEntries as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId')
      .replace('${entryNumber}', ':entryNumber'),
    removeEntries: `${occEndpoint}:baseSiteId/${(cartEndpoints.removeEntries as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId')
      .replace('${entryNumber}', ':entryNumber'),
    deleteCart: `${occEndpoint}:baseSiteId/${(cartEndpoints.deleteCart as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    cartVoucher: `${occEndpoint}:baseSiteId/${(cartEndpoints.cartVoucher as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    cartVoucherRemove: `${occEndpoint}:baseSiteId/${(cartEndpoints.cartVoucher as string).split('?')[0]}/:voucherCode`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    validate: `${occEndpoint}:baseSiteId/${(cartEndpoints.validate as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    saveCart: `${occEndpoint}:baseSiteId${(cartEndpoints.saveCart as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'), // Note: The saveCart endpoint from the Spartacus Core starts with a "/"

    // checkout
    setDeliveryAddress: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.setDeliveryAddress as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    createDeliveryAddress: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.createDeliveryAddress as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    removeDeliveryAddress: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.removeDeliveryAddress as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    deliveryMode: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.deliveryMode as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    deliveryModes: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.deliveryModes as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    // order
    orderHistory: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderHistory as string).split('?')[0]}`.replace(
      '${userId}',
      ':userId'
    ),
    orderDetail: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderDetail as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${orderId}', ':orderId'),
    cancelOrder: `${occEndpoint}:baseSiteId/${(orderEndpoints.cancelOrder as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${orderId}', ':orderId'),
    returnOrder: `${occEndpoint}:baseSiteId/${(orderEndpoints.returnOrder as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${orderId}', ':orderId'),
    orderReturns: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderReturns as string).split('?')[0]}`.replace(
      '${userId}',
      ':userId'
    ),
    orderReturnDetail: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderReturnDetail as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${returnRequestCode}', ':returnRequestCode'),
    cancelReturn: `${occEndpoint}:baseSiteId/${(orderEndpoints.cancelReturn as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${returnRequestCode}', ':returnRequestCode'),

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

    // account
    restoreSavedCart: `${occEndpoint}:baseSideId/${savedCartEndpoints?.restoreSavedCart}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    cloneSavedCart: `${occEndpoint}:baseSideId/${savedCartEndpoints?.cloneSavedCart}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
    savedCart: `${occEndpoint}:baseSideId/${savedCartEndpoints?.savedCart}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),
  };
}
