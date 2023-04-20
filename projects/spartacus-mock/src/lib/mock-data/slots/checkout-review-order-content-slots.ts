import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutReviewOrderContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContent',
      [
        flexType('CheckoutProgress'),
        flexType('CheckoutProgressMobileTop'),
        flexType('CheckoutReviewOrder'),
        flexType('ExportOrderEntriesComponent'),
        flexType('CheckoutProgressMobileBottom'),
      ]
    ),

    contentSlot(
      'SideContent',
      [
        flexType('CheckoutOrderSummary'),
        flexType('CheckoutPlaceOrder'),
      ]
    ),
  ];
};
