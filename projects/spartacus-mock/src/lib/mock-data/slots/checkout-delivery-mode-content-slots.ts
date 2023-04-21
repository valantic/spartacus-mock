import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutDeliveryModeContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot('BodyContent', [
      flexTypeComponent('CheckoutProgress'),
      flexTypeComponent('CheckoutProgressMobileTop'),
      flexTypeComponent('CheckoutDeliveryMode'),
      flexTypeComponent('CheckoutProgressMobileBottom'),
    ]),

    contentSlot('SideContent', [flexTypeComponent('CheckoutOrderSummary')]),
  ];
};
