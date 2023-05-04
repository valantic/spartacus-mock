import { cmsCartContentSlots } from '../slots/cart-content-slots';
import { checkoutContentSlots } from '../slots/checkout-content-slots';
import { checkoutDeliveryAddressContentSlots } from '../slots/checkout-delivery-address-content-slots';
import { checkoutDeliveryModeContentSlots } from '../slots/checkout-delivery-mode-content-slots';
import { checkoutLoginContentSlots } from '../slots/checkout-login-content-slots';
import { checkoutPaymentDetailsContentSlots } from '../slots/checkout-payment-details-content-slots';
import { checkoutReviewOrderContentSlots } from '../slots/checkout-review-order-content-slots';
import { cmsPageContentSlots } from '../slots/cms-page-content-slots';
import { cmsPageContentSlotsNotFound } from '../slots/cms-page-content-slots-not-found';
import { exampleContentSlots } from '../slots/example-content-slots';
import { orderConfirmationContentSlots } from '../slots/order-confirmation-content-slots';
import { storeFinderOrderSlots } from '../slots/store-finder-slots';
import { cmsSearchContentSlots } from '../slots/search-content-slots';
import { accountOrderHistorySlots } from '../slots/account-order-history-slots';
import { accountOrderSlots } from '../slots/account-order-slots';
import { accountWishListSlots } from '../slots/account-wish-list-slots';
import { accountSavedCartsSlots } from '../slots/account-saved-carts-slots';
import { accountSavedCartSlots } from '../slots/account-saved-cart-slots';
import { accountAddressBookSlots } from '../slots/account-address-book-slots';
import { accountPaymentDetailsSlots } from '../slots/account-payment-details-slots';
import { accountPersonalDetailsSlots } from '../slots/account-personal-details-slots';
import { accountUpdatePasswordSlots } from '../slots/account-update-password-slots';
import { accountUpdateEmailSlots } from '../slots/account-update-email-slots';
import { accountConsentsSlots } from '../slots/account-consents-slots';
import { accountCloseAccountSlots } from '../slots/account-close-account-slots';
import { accountMyInterestsSlots } from '../slots/account-my-interests-slots';
import { accountNotificationPreferenceSlots } from '../slots/account-notification-preference-slots';
import { accountCouponsSlots } from '../slots/account-coupons-slots';
import { accountQuickOrderSlots } from '../slots/account-quick-order-slots';
import { ContentPage } from './content';
import { Pages } from '../../types';

/**
 * !!! Please note: !!!
 *
 * The mock server compares the routes by using startsWith(), therefore, routes starting with the same word
 * need to be in the correct order!!!
 *
 */
export const contentPages = (contentPage: ContentPage): Pages => {
  return {
    'example-content': contentPage.createContentPage('/example-content', 'Example Content Page', exampleContentSlots()),
    'login/register': contentPage.createRegisterPage(),
    login: contentPage.createLoginPage(),
    logout: contentPage.createContentPage('/logout', 'Logout', cmsPageContentSlots()),
    search: contentPage.createContentPage(
      '/search',
      'Search',
      cmsSearchContentSlots('SearchResultsListSlot', 'SearchResultsListComponent'),
      'SearchResultsListPageTemplate'
    ),
    'not-found': contentPage.createContentPage('/not-found', 'Page not found', cmsPageContentSlotsNotFound()),
    cart: contentPage.createContentPage('/cart', 'Your shopping cart', cmsCartContentSlots(), 'CartPageTemplate'),
    'checkout-login': contentPage.createContentPage(
      '/checkout-login',
      'Checkout Login',
      checkoutLoginContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/delivery-address': contentPage.createContentPage(
      '/checkout/delivery-address',
      'Checkout Delivery Address',
      checkoutDeliveryAddressContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/delivery-mode': contentPage.createContentPage(
      '/checkout/delivery-mode',
      'Checkout Delivery Mode',
      checkoutDeliveryModeContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/payment-details': contentPage.createContentPage(
      '/checkout/payment-details',
      'Checkout Payment Details',
      checkoutPaymentDetailsContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/review-order': contentPage.createContentPage(
      '/checkout/review-order',
      'Checkout Review Order',
      checkoutReviewOrderContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    checkout: contentPage.createContentPage(
      'contentPage.createContentPage',
      '/checkout',
      checkoutContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'order-confirmation': contentPage.createContentPage(
      '/order-confirmation',
      'Order Confirmation',
      orderConfirmationContentSlots(),
      'OrderConfirmationPageTemplate'
    ),
    'my-account/orders': contentPage.createContentPage(
      '/my-account/orders',
      'Order History',
      accountOrderHistorySlots(),
      'AccountPageTemplate'
    ),
    'my-account/order': contentPage.createContentPage(
      '/my-account/order',
      'Order Details',
      accountOrderSlots(),
      'AccountPageTemplate'
    ),
    'my-account/wish-list': contentPage.createContentPage(
      '/my-account/wish-list',
      'Wishlist',
      accountWishListSlots(),
      'AccountPageTemplate'
    ),
    'my-account/saved-carts': contentPage.createContentPage(
      '/my-account/saved-carts',
      'Saved Carts',
      accountSavedCartsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/saved-cart': contentPage.createContentPage(
      '/my-account/saved-cart',
      'Saved Cart',
      accountSavedCartSlots(),
      'AccountPageTemplate'
    ),
    'my-account/address-book': contentPage.createContentPage(
      '/my-account/address-book',
      'Address Book',
      accountAddressBookSlots(),
      'AccountPageTemplate'
    ),
    'my-account/payment-details': contentPage.createContentPage(
      '/my-account/payment-details',
      'Payment Details',
      accountPaymentDetailsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/update-profile': contentPage.createContentPage(
      '/my-account/update-profile',
      'Update Personal Details',
      accountPersonalDetailsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/update-password': contentPage.createContentPage(
      '/my-account/update-password',
      'Update Password',
      accountUpdatePasswordSlots(),
      'AccountPageTemplate'
    ),
    'my-account/update-email': contentPage.createContentPage(
      '/my-account/update-email',
      'Update E-Mail',
      accountUpdateEmailSlots(),
      'AccountPageTemplate'
    ),
    'my-account/consents': contentPage.createContentPage(
      '/my-account/consents',
      'Consent Management',
      accountConsentsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/close-account': contentPage.createContentPage(
      '/my-account/close-account',
      'Close Account',
      accountCloseAccountSlots(),
      'AccountPageTemplate'
    ),
    'my-account/my-interests': contentPage.createContentPage(
      '/my-account/my-interests',
      'My Interests',
      accountMyInterestsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/notification-preference': contentPage.createContentPage(
      '/my-account/notification-preference',
      'Notification Preference',
      accountNotificationPreferenceSlots(),
      'AccountPageTemplate'
    ),
    'my-account/coupons': contentPage.createContentPage(
      '/my-account/coupons',
      'My Coupons',
      accountCouponsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/quick-order': contentPage.createContentPage(
      '/my-account/quick-order',
      'Quick Order',
      accountQuickOrderSlots(),
      'AccountPageTemplate'
    ),
    'store-finder': contentPage.createContentPage(
      '/store-finder',
      'Find a store',
      storeFinderOrderSlots(),
      'StoreFinderPageTemplate'
    ),
  };
};
