import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';

export const accountCouponsSlots = (): ContentSlot[] => {
  // content slots
  return [contentSlot('BodyContent', [flexTypeComponent('MyCouponsComponent')])];
};
