import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutLoginContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContentSlot-checkoutLogin',
      'BodyContent',
      'Checkout Login Slot',
      [
        // TODO check which component needs to be added here
      ]
    ),

    contentSlot(
      'SideContentSlot-checkoutLogin',
      'SideContent',
      'Order Summary Slot',
      [
        // TODO check which component needs to be added here
      ]
    ),
  ];
};
