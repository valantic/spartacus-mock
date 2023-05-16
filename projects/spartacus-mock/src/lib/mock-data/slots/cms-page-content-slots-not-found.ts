import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components';
import { contentSlot } from '../components';

export const cmsPageContentSlotsNotFound = (): ContentSlot[] => {
  // content slots
  return [contentSlot('Section3', [cmsParagraphComponent('The page you have requested was not found.')])];
};
