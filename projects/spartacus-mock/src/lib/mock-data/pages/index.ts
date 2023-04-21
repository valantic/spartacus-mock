import { faker } from '@faker-js/faker';
import { ContentSlot } from '../../types';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { cmsCartContentSlots } from '../slots/cart-content-slots';
import { checkoutContentSlots } from '../slots/checkout-content-slots';
import { checkoutDeliveryAddressContentSlots } from '../slots/checkout-delivery-address-content-slots';
import { checkoutDeliveryModeContentSlots } from '../slots/checkout-delivery-mode-content-slots';
import { checkoutLoginContentSlots } from '../slots/checkout-login-content-slots';
import { checkoutPaymentDetailsContentSlots } from '../slots/checkout-payment-details-content-slots';
import { checkoutReviewOrderContentSlots } from '../slots/checkout-review-order-content-slots';
import { cmsPageContentSlots } from '../slots/cms-page-content-slots';
import { cmsPageContentSlotsFlexTypeComponent } from '../slots/cms-page-content-slots-flex-type-component';
import { cmsPageContentSlotsNotFound } from '../slots/cms-page-content-slots-not-found';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { orderConfirmationContentSlots } from '../slots/order-confirmation-content-slots';
import { loginPage, registerPage } from './login';
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

export interface Page {
  uid: string;
  uuid: string;
  title: string;
  template: string;
  typeCode: string;
  name: string;
  robotTag: string;
  contentSlots: {
    contentSlot: ContentSlot[];
  };
  label: string;
  pageId?: string;
}

export interface Pages {
  [key: string]: Page;
}

const contentPage = (pageLabelOrId: string, title: string, contentSlots: ContentSlot[], template?: string): Page => {
  return {
    uid: `contentPage${faker.datatype.uuid()}`,
    uuid: faker.datatype.uuid(),
    title,
    template: template ?? 'ContentPage1Template',
    typeCode: 'ContentPage',
    name: title ?? 'dummy title',
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [...headerSlots(breadcrumbComponent()), ...contentSlots, ...footerSlots()],
    },
    label: pageLabelOrId,
  };
};

/**
 * !!! Please note: !!!
 *
 * The mock server compares the routes by using startsWith(), therefore, routes starting with the same word
 * need to be in the correct order!!!
 *
 */
export const contentPages = (): Pages => {
  return {
    'login/register': registerPage(),
    login: loginPage(),
    logout: contentPage('/logout', 'Logout', cmsPageContentSlots()),
    search: contentPage('/search', 'Search', cmsPageContentSlotsFlexTypeComponent('SearchResultsListComponent')),
    'not-found': contentPage('/not-found', 'Page not found', cmsPageContentSlotsNotFound()),
    cart: contentPage('/cart', 'Your shopping cart', cmsCartContentSlots(), 'CartPageTemplate'),
    'checkout-login': contentPage(
      '/checkout-login',
      'Checkout Login',
      checkoutLoginContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/delivery-address': contentPage(
      '/checkout/delivery-address',
      'Checkout Delivery Address',
      checkoutDeliveryAddressContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/delivery-mode': contentPage(
      '/checkout/delivery-mode',
      'Checkout Delivery Mode',
      checkoutDeliveryModeContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/payment-details': contentPage(
      '/checkout/payment-details',
      'Checkout Payment Details',
      checkoutPaymentDetailsContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    'checkout/review-order': contentPage(
      '/checkout/review-order',
      'Checkout Review Order',
      checkoutReviewOrderContentSlots(),
      'MultiStepCheckoutSummaryPageTemplate'
    ),
    checkout: contentPage('ContentPage', '/checkout', checkoutContentSlots(), 'MultiStepCheckoutSummaryPageTemplate'),
    'order-confirmation': contentPage(
      '/order-confirmation',
      'Order Confirmation',
      orderConfirmationContentSlots(),
      'OrderConfirmationPageTemplate'
    ),
    'my-account/orders': contentPage(
      '/my-account/orders',
      'Order History',
      accountOrderHistorySlots(),
      'AccountPageTemplate'
    ),
    'my-account/order': contentPage('/my-account/order', 'Order Details', accountOrderSlots(), 'AccountPageTemplate'),
    'my-account/wish-list': contentPage(
      '/my-account/wish-list',
      'Wishlist',
      accountWishListSlots(),
      'AccountPageTemplate'
    ),
    'my-account/saved-carts': contentPage(
      '/my-account/saved-carts',
      'Saved Carts',
      accountSavedCartsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/saved-cart': contentPage(
      '/my-account/saved-cart',
      'Saved Cart',
      accountSavedCartSlots(),
      'AccountPageTemplate'
    ),
    'my-account/address-book': contentPage(
      '/my-account/address-book',
      'Address Book',
      accountAddressBookSlots(),
      'AccountPageTemplate'
    ),
    'my-account/payment-details': contentPage(
      '/my-account/payment-details',
      'Payment Details',
      accountPaymentDetailsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/update-profile': contentPage(
      '/my-account/update-profile',
      'Update Personal Details',
      accountPersonalDetailsSlots(),
      'AccountPageTemplate'
    ),
    'my-account/update-password': contentPage(
      '/my-account/update-password',
      'Update Password',
      accountUpdatePasswordSlots(),
      'AccountPageTemplate'
    ),
    'my-account/update-email': contentPage(
      '/my-account/update-email',
      'Update E-Mail',
      accountUpdateEmailSlots(),
      'AccountPageTemplate'
    ),
    'my-account/consents': contentPage(
      '/my-account/consents',
      'Consent Management',
      accountConsentsSlots(),
      'AccountPageTemplate'
    ),
  };
};
