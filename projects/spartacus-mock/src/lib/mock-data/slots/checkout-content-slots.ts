import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot(
      'BodyContent',
      [
        flexType('CheckoutOrchestrator')
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
