import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const cmsPageContentSlotsFlexTypeComponent = (flexType: string): ContentSlot[] => {
  // content slots
  return [contentSlot('Section3', [flexTypeComponent(flexType)])];
};
