import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const checkoutReviewOrderContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot('BodyContent', [
      flexTypeComponent('CheckoutProgress'),
      flexTypeComponent('CheckoutProgressMobileTop'),
      flexTypeComponent('CheckoutReviewOrder'),
      flexTypeComponent('ExportOrderEntriesComponent'),
      flexTypeComponent('CheckoutProgressMobileBottom'),
    ]),

    contentSlot('SideContent', [flexTypeComponent('CheckoutOrderSummary'), flexTypeComponent('CheckoutPlaceOrder')]),
  ];
};
