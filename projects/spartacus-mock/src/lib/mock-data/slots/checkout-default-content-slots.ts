import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';

export const checkoutDefaultContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'CheckoutHeaderSlot',
      'TopContent',
      'Checkout Header Slot',
      []
    ),

    contentSlot(
      'PlaceholderContentSlot',
      'PlaceholderContentSlot',
      'PlaceholderContentSlot',
      [
        flexType('ProfileTagScriptComponent')
      ]
    ),

    contentSlot(
      'CheckoutFooterSlot',
      'BottomContent',
      'Checkout Footer Slot',
      []
    ),
  ];
};
