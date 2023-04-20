import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const orderConfirmationContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'BodyContent-orderConfirmation',
      'BodyContent',
      'Body Content Slot for Order Confirmation',
      [
        flexType('OrderConfirmationThankMessageComponent'),
        flexType('OrderConfirmationOverviewComponent'),
        flexType('OrderConfirmationItemsComponent'),
        flexType('ExportOrderEntriesComponent'),
        flexType('OrderConfirmationShippingComponent'),
        flexType('OrderConfirmationTotalsComponent'),
        flexType('OrderConfirmationContinueButtonComponent'),
      ]
    ),

    contentSlot(
      'SideContentSlot-orderConfirmation',
      'SideContent',
      'Side Content Slot for Order Confirmation',
      []
    ),
  ];
};
