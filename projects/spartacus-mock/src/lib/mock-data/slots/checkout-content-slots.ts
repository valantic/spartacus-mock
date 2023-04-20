import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContentSlot-checkout',
      'BodyContent',
      'Checkout Orchestrator Slot',
      [
        flexType('CheckoutOrchestrator')
      ]
    ),

    contentSlot(
      'SideContentSlot-checkout',
      'SideContent',
      'Order Summary Slot',
      [
        flexType('CheckoutOrderSummary')
      ]
    ),
  ];
};
