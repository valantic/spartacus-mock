import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const accountAddressBookSlots = (): ContentSlot[] => {
  // content slots
  return [contentSlot('BodyContent', [flexTypeComponent('AccountAddressBookComponent')])];
};
