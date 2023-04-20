import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutDeliveryModeContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContent',
      [
        flexType('CheckoutProgress'),
        flexType('CheckoutProgressMobileTop'),
        flexType('CheckoutDeliveryMode'),
        flexType('CheckoutProgressMobileBottom'),
      ]
    ),

    contentSlot(
      'SideContent',
      [
        flexType('CheckoutOrderSummary')
      ]
    ),
  ];
};
