import { faker } from '@faker-js/faker';
import { headerSlots } from '../slots/header-slots';
import { footerSlots } from '../slots/footer-slots';
import { cmsPageContentSlotsNotFound } from '../slots/cms-page-content-slots-not-found';
import { cmsPageContentSlots } from '../slots/cms-page-content-slots';
import { cmsCartContentSlots } from '../slots/cart-content-slots';
import { cmsPageContentSlotsFlexTypeComponent } from '../slots/cms-page-content-slots-flex-type-component';
import { loginPage, registerPage } from './login';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { ContentSlot } from '../../types';
import { checkoutContentSlots } from '../slots/checkout-content-slots';
import { checkoutLoginContentSlots } from '../slots/checkout-login-content-slots';
import { checkoutDeliveryAddressContentSlots } from '../slots/checkout-delivery-address-content-slots';
import { checkoutDeliveryModeContentSlots } from '../slots/checkout-delivery-mode-content-slots';
import { checkoutPaymentDetailsContentSlots } from '../slots/checkout-payment-details-content-slots';
import { checkoutReviewOrderContentSlots } from '../slots/checkout-review-order-content-slots';
import { orderConfirmationContentSlots } from '../slots/order-confirmation-content-slots';
import { accountOrderHistorySlots } from '../slots/account-order-history-slots';
import { accountOrderSlots } from '../slots/account-order-slots';

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

interface AdditionalData {
  template?: string;
  uid?: string;
}

const contentPage = (
  pageType: string,
  pageLabelOrId: string,
  title: string,
  name: string,
  contentSlots: ContentSlot[],
  additionalData?: AdditionalData,
): Page => {
  const { template, uid } = additionalData || {};

  return {
    uid: uid ?? `contentPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title,
    template: template ?? 'ContentPage1Template',
    typeCode: pageType,
    name,
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
    'login/register': registerPage('ContentPage', '/login/register'),
    login: loginPage('ContentPage', '/login'),
    logout: contentPage('ContentPage', '/logout', 'Logout', 'Logout', cmsPageContentSlots()),
    search: contentPage(
      'ContentPage',
      '/search',
      'Search',
      'Search',
      cmsPageContentSlotsFlexTypeComponent('SearchResultsListComponent')
    ),
    'not-found': contentPage(
      'ContentPage',
      '/not-found',
      'Page not found',
      'Page Not found',
      cmsPageContentSlotsNotFound()
    ),
    'cart': contentPage('ContentPage', '/cart', 'Your shopping cart', 'Cart Page', cmsCartContentSlots(), { template: 'CartPageTemplate', uid: 'cartPage' }),
    'checkout-login': contentPage('ContentPage', '/checkout-login', 'Checkout Login', 'Checkout Login Page', checkoutLoginContentSlots(), { template: 'MultiStepCheckoutSummaryPageTemplate', uid: 'CheckoutLogin' }),
    'checkout/delivery-address': contentPage('ContentPage', '/checkout/delivery-address', 'Checkout Delivery Address', 'Checkout Delivery Address Page', checkoutDeliveryAddressContentSlots(), { template: 'MultiStepCheckoutSummaryPageTemplate', uid: 'CheckoutDeliveryAddress' }),
    'checkout/delivery-mode': contentPage('ContentPage', '/checkout/delivery-mode', 'Checkout Delivery Mode', 'Checkout Delivery Mode Page', checkoutDeliveryModeContentSlots(), { template: 'MultiStepCheckoutSummaryPageTemplate', uid: 'CheckoutDeliveryMode' }),
    'checkout/payment-details': contentPage('ContentPage', '/checkout/payment-details', 'Checkout Payment Details', 'Checkout Payment Details Page', checkoutPaymentDetailsContentSlots(), { template: 'MultiStepCheckoutSummaryPageTemplate', uid: 'CheckoutPaymentDetails' }),
    'checkout/review-order': contentPage('ContentPage', '/checkout/review-order', 'Checkout Review Order', 'Checkout Review Order Page', checkoutReviewOrderContentSlots(), { template: 'MultiStepCheckoutSummaryPageTemplate', uid: 'CheckoutReviewOrder' }),
    'checkout': contentPage('ContentPage', '/checkout', 'Checkout', 'Checkout Page', checkoutContentSlots(), { template: 'MultiStepCheckoutSummaryPageTemplate', uid: 'Checkout' }),
    'order-confirmation': contentPage('ContentPage', '/order-confirmation', 'Order Confirmation', 'Order Confirmation Page', orderConfirmationContentSlots(), { template: 'OrderConfirmationPageTemplate', uid: 'orderConfirmationPage' }),
    account: contentPage(
      'ContentPage',
      '/account',
      'Account Overview',
      'Account Overview',
      cmsPageContentSlotsFlexTypeComponent('ValanticAccountOverviewComponent')
    ),
    'my-account/orders': contentPage('ContentPage', '/my-account/orders', 'Order History', 'Order History', accountOrderHistorySlots(), { template: 'AccountPageTemplate' }),
    'my-account/order': contentPage('ContentPage', '/my-account/order', 'Order Details', 'Order Details', accountOrderSlots(), { template: 'AccountPageTemplate' }),
  };
};
