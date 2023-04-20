import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { checkoutDefaultContentSlots } from './checkout-default-content-slots';

export const checkoutLoginContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    ...checkoutDefaultContentSlots(),

    contentSlot('BodyContent', [
      // TODO check which component needs to be added here
    ]),

    contentSlot('SideContent', [
      // TODO check which component needs to be added here
    ]),
  ];
};
