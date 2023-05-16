import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const cmsSearchContentSlots = (listSlotName: string, listFlexTypeCode: string): ContentSlot[] => {
  // content slots
  return [
    contentSlot(listSlotName, [flexTypeComponent(listFlexTypeCode)]),
    contentSlot('ProductLeftRefinements', [flexTypeComponent('ProductRefinementComponent')]),
  ];
};
