import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { ContentSlot } from '../../types';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { accountOrderHistorySlots } from '../slots/account-order-history-slots';
import { accountOrderSlots } from '../slots/account-order-slots';
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
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { orderConfirmationContentSlots } from '../slots/order-confirmation-content-slots';
import { cmsSearchContentSlots } from '../slots/search-content-slots';
import { loginPage, registerPage } from './login';

import PageRobots = Occ.PageRobots;

export interface OccCmsPageExtended extends Occ.CMSPage {
  uuid: string;
}

export interface Pages {
  [key: string]: OccCmsPageExtended;
}

const contentPage = (
  pageLabelOrId: string,
  title: string,
  contentSlots: ContentSlot[],
  template?: string
): OccCmsPageExtended => {
  return {
    uid: `contentPage${faker.datatype.uuid()}`,
    uuid: faker.datatype.uuid(),
    title,
    template: template ?? 'ContentPage1Template',
    typeCode: 'ContentPage',
    name: title ?? 'dummy title',
    robotTag: PageRobots.INDEX_FOLLOW,
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
    'example-content': contentPage('/example-content', 'Example Content Page', exampleContentSlots()),
    'login/register': registerPage(),
    login: loginPage(),
    logout: contentPage('/logout', 'Logout', cmsPageContentSlots()),
    search: contentPage(
      '/search',
      'Search',
      cmsSearchContentSlots('SearchResultsListSlot', 'SearchResultsListComponent'),
      'SearchResultsListPageTemplate'
    ),
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
  };
};
