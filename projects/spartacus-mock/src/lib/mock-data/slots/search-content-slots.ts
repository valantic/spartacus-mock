import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const cmsSearchContentSlots = (listSlotName: string, listFlexTypeCode: string): ContentSlot[] => {
  // content slots
  return [
    contentSlot('Section2', []),
    contentSlot('Section4', []),
    contentSlot(listSlotName, [flexTypeComponent(listFlexTypeCode)]),
    contentSlot('ProductLeftRefinements', [flexTypeComponent('ProductRefinementComponent')]),
  ];
};
