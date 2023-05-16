import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const cmsPageContentSlotsAccountOverview = (): ContentSlot[] => {
  // content slots
  return [contentSlot('Section3', [flexTypeComponent('XxxAccountOverviewComponent')])];
};
