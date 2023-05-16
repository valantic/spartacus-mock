import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutLoginContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot('BodyContent', [flexTypeComponent('ReturningCustomerCheckoutLoginComponent')]),

    contentSlot('SideContent', [flexTypeComponent('GuestCheckoutLoginComponent')]),
  ];
};
