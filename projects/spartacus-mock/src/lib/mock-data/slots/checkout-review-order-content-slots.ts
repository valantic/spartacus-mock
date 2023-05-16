import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

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
