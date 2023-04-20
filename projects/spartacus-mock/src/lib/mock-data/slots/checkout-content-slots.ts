import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot('BodyContent', [flexTypeComponent('CheckoutOrchestrator')]),

    contentSlot('SideContent', [flexTypeComponent('CheckoutOrderSummary')]),
  ];
};
