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
        flexType('OrderConfirmationThankMessageComponent', 'Order Confirmation Thank You Message Component', 'OrderConfirmationThankMessageComponent', faker.datatype.uuid()),
        flexType('OrderConfirmationOverviewComponent', 'Order Confirmation Overview Info Component', 'OrderConfirmationOverviewComponent', faker.datatype.uuid()),
        flexType('OrderConfirmationItemsComponent', 'Order Confirmation Items Info Component', 'OrderConfirmationItemsComponent', faker.datatype.uuid()),
        flexType('ExportOrderEntriesComponent', 'Export Order Entries Component', 'ExportOrderEntriesComponent', faker.datatype.uuid()),
        flexType('OrderConfirmationShippingComponent', 'Order Confirmation Shipping Info Component', 'OrderConfirmationShippingComponent', faker.datatype.uuid()),
        flexType('OrderConfirmationTotalsComponent', 'Order Confirmation Totals Component', 'OrderConfirmationTotalsComponent', faker.datatype.uuid()),
        flexType('OrderConfirmationContinueButtonComponent', 'Order Confirmation Continue Button Component', 'OrderConfirmationContinueButtonComponent', faker.datatype.uuid()),
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
