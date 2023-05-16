import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const storeFinderOrderSlots = (): ContentSlot[] => {
  // content slots
  return [contentSlot('MiddleContent', [flexTypeComponent('StoreFinderComponent')])];
};
