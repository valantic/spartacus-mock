import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutDeliveryModeContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContentSlot-checkoutDeliveryMode',
      'BodyContent',
      'Checkout Delivery Mode Slot',
      [
        flexType('CheckoutProgress'),
        flexType('CheckoutProgressMobileTop'),
        flexType('CheckoutDeliveryMode'),
        flexType('CheckoutProgressMobileBottom'),
      ]
    ),

    contentSlot(
      'SideContentSlot-checkoutDeliveryMode',
      'SideContent',
      'Order Summary Slot',
      [
        flexType('CheckoutOrderSummary')
      ]
    ),
  ];
};
