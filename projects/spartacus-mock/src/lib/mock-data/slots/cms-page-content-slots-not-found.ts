import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { contentSlot } from '../components/default/content-slot';

export const cmsPageContentSlotsNotFound = (): ContentSlot[] => {
  // content slots
  return [contentSlot('Section3', [cmsParagraphComponent('The page you have requested was not found.')])];
};
