import { defaultOccUserProfileConfig } from '@spartacus/user/profile/occ';
import { occCartConfig } from './occ-config/occ-cart-config';
import { occCheckoutConfig } from './occ-config/occ-checkout-config';
import { occOrderConfig } from './occ-config/occ-order-config';
import { occSavedCartConfig } from './occ-config/occ-saved-cart-config';
import { occStoreFinderConfig } from './occ-config/occ-store-finder-config';
import { occUserConfig } from './occ-config/occ-user-config';
import { Environment } from './types';

/**
 * TODO use endpoints from default configs after SAP exports them
 * TODO Refactor this file to be a service
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
const userEndpoints = occUserConfig.backend?.occ?.endpoints;
const userProfileEndpoints = defaultOccUserProfileConfig.backend?.occ?.endpoints;
const storeFinderEndpoints = occStoreFinderConfig.backend.occ.endpoints;

/**
 * Returns the default routes for Spartacus Mock Server
 * @param environment
 */
export function getDefaultRoutes(environment: Environment) {
  const occEndpoint = `${environment.backend.occ?.baseUrl}${environment.backend.occ?.prefix}`;

  // TODO Take all endpoints from the defaultXxx configs above
  return {
    /**
     * General Calls ***************************************************************************************************
     */

    /**
     * Route for the baseSites call being done by spartacus on application startup
     */
    baseSites: `${occEndpoint}basesites`,

    /**
     * Route for the languages call being done by spartacus on application startup
     */
    languages: `${occEndpoint}:baseSiteId/languages`,

    /**
     * Route for the currencies call being done by spartacus on application startup
     */
    currencies: `${occEndpoint}:baseSiteId/currencies`,

    /**
     * Route for the titles call being done by spartacus when showing the address form
     */
    titles: `${occEndpoint}:baseSiteId/titles`,

    /**
     * Route for the countries call being done by spartacus when showing the address form
     */
    countries: `${occEndpoint}:baseSiteId/countries`,

    /**
     * Route for the regions call being done by spartacus when showing the address form
     */
    regions: `${occEndpoint}:baseSiteId/countries/:isocode/regions`,

    /**
     *  Route for the i18n call to load the translations from the backend when having i18n lazy loading activated
     *  Url is defined as <occ-base-url>/<occ-prefix>/i18n/${language}/${namespace} and can be overridden via
     *  option i18nEndpoint of the spartacus-mock options
     */
    i18n: `${occEndpoint}:baseSiteId/${i18nEndpoint
      .split('?')[0]
      .replace('${language}', ':language')
      .replace('${namespace}', ':namespace')}`,

    /**
     * User related calls **********************************************************************************************
     */

    /**
     * Route for the login call to the authorizationserver
     */
    authLogin: '*/authorizationserver/oauth/token',

    /**
     * Route for the logout call to the authorizationserver
     */
    authRevoke: '*/authorizationserver/oauth/revoke',

    /**
     * Route for the users call to create a new user during registration
     */
    users: `${occEndpoint}:baseSiteId/users`,

    /**
     * Route for the user call to get the user details after login
     */
    user: `${occEndpoint}:baseSiteId/users/:user`,

    /**
     * Route for the call to get the user details
     * call somehow needed and done without baseSite sometimes
     */
    userTemp: `${occEndpoint}users/:user`,

    /**
     * Route for the call to get the consent templates for the current user
     */
    consentTemplates: `${occEndpoint}:baseSiteId/users/:user/consenttemplates`,

    /**
     * Route for the call to get the notification preferences for the current user
     */
    notificationPreferences: `${occEndpoint}:baseSiteId/users/:user/notificationpreferences`,

    /**
     * Route for the call to get the product interests for the current user
     */
    productInterests: `${occEndpoint}:baseSiteId/users/:user/productinterests`,

    /**
     * Route for the call to get the customer coupons for the current user
     */
    customerCoupons: `${occEndpoint}:baseSiteId/users/:user/customercoupons`,

    /**
     * Route for the call to get the addresses for the current user
     */
    addresses: `${occEndpoint}:baseSiteId/users/:user/addresses`,

    /**
     * Route for the call to get the payment details for the current user
     */
    payments: `${occEndpoint}:baseSiteId/users/:user/paymentDetails`,

    /**
     * Route for the call to get execute the address verification for the current user
     */
    addressVerification: `${occEndpoint}:baseSiteId/users/:user/addresses/verification`,

    /**
     * CMS Calls *******************************************************************************************************
     */

    /**
     * Route for the call to get the page data (basic page data & slots with components) for the current page
     */
    pages: `${occEndpoint}:baseSiteId/cms/pages`,

    /**
     * Route for the call to get the component data (spartacus does this call with aggregated component Uid's)
     */
    components: `${occEndpoint}:baseSiteId/cms/components`,

    /**
     * Product Calls ***************************************************************************************************
     */

    /**
     * Route for the call to get the product references for the current product (works on product detail page)
     */
    productReferences: `${occEndpoint}:baseSiteId/products/:productCode/references`,

    /**
     * Route for the call to get the product references for the current product (works on product detail page)
     */
    productReviews: `${occEndpoint}:baseSiteId/products/:productCode/reviews`,

    /**
     * Route for the call to search for products and return a productSearchPage Object
     */
    productSearch: `${occEndpoint}:baseSiteId/products/search`,

    /**
     * Route for the call to search for text based product suggestions
     */
    searchSuggestions: `${occEndpoint}:baseSiteId/products/suggestions`,

    /**
     * Route for the call to load the product details
     */
    product: `${occEndpoint}:baseSiteId/products/:productCode`,

    /**
     * Cart Calls ******************************************************************************************************
     */
    /**
     * Route for the call to load the carts for a user. The returned array can contain multiple (normal, wishlist, selective) carts.
     */
    carts: `${occEndpoint}:baseSiteId/${(cartEndpoints.carts as string).split('?')[0]}`.replace('${userId}', ':userId'),

    /**
     * Route for the call to load the cart data for a certain cartId
     */
    cart: `${occEndpoint}:baseSiteId/${(cartEndpoints.cart as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to add an entry to cart
     */
    addEntries: `${occEndpoint}:baseSiteId/${(cartEndpoints.addEntries as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to update an entry in the cart
     */
    updateEntries: `${occEndpoint}:baseSiteId/${(cartEndpoints.updateEntries as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId')
      .replace('${entryNumber}', ':entryNumber'),

    /**
     * Route for the call to remove an entry from the cart
     */
    removeEntries: `${occEndpoint}:baseSiteId/${(cartEndpoints.removeEntries as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId')
      .replace('${entryNumber}', ':entryNumber'),

    /**
     * Route for the call to delete a cart
     */
    deleteCart: `${occEndpoint}:baseSiteId/${(cartEndpoints.deleteCart as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to set an email on the cart (needed for guest checkout)
     */
    addEmail: `${occEndpoint}:baseSiteId/${(cartEndpoints.addEmail as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to add a voucher on the cart
     */
    cartVoucher: `${occEndpoint}:baseSiteId/${(cartEndpoints.cartVoucher as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to remove a voucher from the cart
     */
    cartVoucherRemove: `${occEndpoint}:baseSiteId/${(cartEndpoints.cartVoucher as string).split('?')[0]}/:voucherCode`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to validate the cart
     */
    validate: `${occEndpoint}:baseSiteId/${(cartEndpoints.validate as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to save a cart as wishlist cart for user logging in and not having a wishlist cart yet
     */
    saveCart: `${occEndpoint}:baseSiteId${(cartEndpoints.saveCart as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'), // Note: The saveCart endpoint from the Spartacus Core starts with a "/"

    /**
     * Checkout Calls **************************************************************************************************
     */

    /**
     * Route for the call to set a delivery address on the cart during checkout
     */
    setDeliveryAddress: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.setDeliveryAddress as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to create a new delivery address on the cart during checkout
     */
    createDeliveryAddress: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.createDeliveryAddress as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to remove a delivery address on the cart during checkout
     */
    removeDeliveryAddress: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.removeDeliveryAddress as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to set a delivery mode on the cart during checkout
     */
    deliveryMode: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.deliveryMode as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to get all available delivery modes
     */
    deliveryModes: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.deliveryModes as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to get all available card types for payment
     */
    cardTypes: `${occEndpoint}:baseSiteId/${(checkoutEndpoints.cardTypes as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to get the payment provider sub info when using an integrated payment provider (default spartacus)
     */
    paymentProviderSubInfo: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.paymentProviderSubInfo as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to create a new payment method
     */
    createPaymentDetails: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.createPaymentDetails as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to set an existing payment method on the cart
     */
    setCartPaymentDetails: `${occEndpoint}:baseSiteId/${
      (checkoutEndpoints.setCartPaymentDetails as string).split('?')[0]
    }`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to get the mock sop payment response (html page)
     */
    sopMockProcess: `${environment.backend.occ?.baseUrl}/acceleratorservices/sop-mock/process`,

    /**
     * Order Calls *****************************************************************************************************
     */

    /**
     * Route for the call to place the order
     */
    placeOrder: `${occEndpoint}:baseSiteId/${(orderEndpoints.placeOrder as string).split('?')[0]}`.replace(
      '${userId}',
      ':userId'
    ),

    /**
     * Route for the call to load the orders for a user
     */
    orderHistory: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderHistory as string).split('?')[0]}`.replace(
      '${userId}',
      ':userId'
    ),

    /**
     * Route for the call to load the order details for an order
     */
    orderDetail: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderDetail as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${orderId}', ':orderId'),

    /**
     * Route for the call to cancel an order
     */
    cancelOrder: `${occEndpoint}:baseSiteId/${(orderEndpoints.cancelOrder as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${orderId}', ':orderId'),

    /**
     * Route for the call to return an order
     */
    returnOrder: `${occEndpoint}:baseSiteId/${(orderEndpoints.returnOrder as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${orderId}', ':orderId'),

    /**
     * Route for the call to load the order returns
     */
    orderReturns: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderReturns as string).split('?')[0]}`.replace(
      '${userId}',
      ':userId'
    ),

    /**
     * Route for the call to load the the order return details
     */
    orderReturnDetail: `${occEndpoint}:baseSiteId/${(orderEndpoints.orderReturnDetail as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${returnRequestCode}', ':returnRequestCode'),

    /**
     * Route for the call to cancel an order return
     */
    cancelReturn: `${occEndpoint}:baseSiteId/${(orderEndpoints.cancelReturn as string).split('?')[0]}`
      .replace('${userId}', ':userId')
      .replace('${returnRequestCode}', ':returnRequestCode'),

    /**
     * Account Calls ***************************************************************************************************
     */

    /**
     * Route for the call to restore a saved cart
     */
    restoreSavedCart: `${occEndpoint}:baseSideId/${savedCartEndpoints?.restoreSavedCart}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to clone a saved cart
     */
    cloneSavedCart: `${occEndpoint}:baseSideId/${(savedCartEndpoints?.cloneSavedCart as string).split('?')}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to get a saved cart
     */
    savedCart: `${occEndpoint}:baseSideId/${savedCartEndpoints?.savedCart}`
      .replace('${userId}', ':userId')
      .replace('${cartId}', ':cartId'),

    /**
     * Route for the call to change / delete an address
     */
    addressDetail: `${occEndpoint}:baseSideId/${userEndpoints?.addressDetail}`
      .replace('${userId}', ':userId')
      .replace('${addressId}', ':addressId'),

    /**
     * Route for the call to delete an payment type
     */
    paymentDetail: `${occEndpoint}:baseSiteId/${userEndpoints?.paymentDetail}`
      .replace('${userId}', ':userId')
      .replace('${paymentDetailId}', ':paymentDetailId'),

    /**
     * Route for the call to update the user password
     */
    userUpdatePassword: `${occEndpoint}:baseSiteId/${userProfileEndpoints?.userUpdatePassword}`.replace(
      '${userId}',
      ':userId'
    ),

    /**
     * Route for the call to update the user id (email)
     */
    userUpdateLoginId: `${occEndpoint}:baseSiteId/${userProfileEndpoints?.userUpdateLoginId}`.replace(
      '${userId}',
      ':userId'
    ),

    /**
     * Route for the call to delete a previously given consent
     */
    consentDetail: `${occEndpoint}:baseSiteId/${userEndpoints?.consentDetail}`
      .replace('${userId}', ':userId')
      .replace('${consentId}', ':consentId'),

    /**
     * Route for the call to get all consents of a user
     */
    consents: `${occEndpoint}:baseSiteId/${userEndpoints?.consents}`.replace('${userId}', ':userId'),

    /**
     * Route for the call to get the notification preferences of a user
     */
    notificationPreference: `${occEndpoint}:baseSiteId/${userEndpoints?.notificationPreference}`.replace(
      '${userId}',
      ':userId'
    ),

    /**
     * Store Finder ****************************************************************************************************
     */

    /**
     * Route for the call to get the number of stores
     */
    storescounts: `${occEndpoint}:baseSiteId/${(storeFinderEndpoints.storescounts as string).split('?')[0]}`,

    /**
     * Route for the call to get the stores
     */
    stores: `${occEndpoint}:baseSiteId/${(storeFinderEndpoints.stores as string).split('?')[0]}`,

    /**
     * Route for the call to get the store details
     */
    store: `${occEndpoint}:baseSiteId/${(storeFinderEndpoints.store as string).split('?')[0]}`.replace(
      '${storeId}',
      ':storeId'
    ),
  };
}
