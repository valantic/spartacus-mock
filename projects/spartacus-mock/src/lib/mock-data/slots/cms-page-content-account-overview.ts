import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const cmsPageContentSlotsAccountOverview = (): ContentSlot[] => {
  // content slots
  return [contentSlot('Section3', [flexTypeComponent('XxxAccountOverviewComponent')])];
};
