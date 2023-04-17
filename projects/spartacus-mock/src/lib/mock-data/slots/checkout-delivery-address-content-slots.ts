import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutDeliveryAddressContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContentSlot-checkoutDeliveryAddress',
      'BodyContent',
      'Checkout Delivery Address Slot',
      [
        flexType('CheckoutProgressComponent', 'Checkout Progress Component', 'CheckoutProgress', faker.datatype.uuid()),
        flexType('CheckoutProgressMobileTopComponent', 'Checkout Progress Mobile Top Component', 'CheckoutProgressMobileTop', faker.datatype.uuid()),
        flexType('CheckoutDeliveryAddressComponent', 'Checkout Delivery Address Component', 'CheckoutDeliveryAddress', faker.datatype.uuid()),
        flexType('CheckoutProgressMobileBottomComponent', 'Checkout Progress Mobile Bottom Component', 'CheckoutProgressMobileBottom', faker.datatype.uuid()),
      ]
    ),

    contentSlot(
      'SideContentSlot-checkoutDeliveryAddress',
      'SideContent',
      'Order Summary Slot',
      [
        flexType('CheckoutOrderSummaryComponent', 'Checkout OrderSummary Component', 'CheckoutOrderSummary', faker.datatype.uuid())
      ]
    ),
  ];
};
