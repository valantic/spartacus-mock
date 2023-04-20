import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const checkoutDefaultContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('TopContent', []),

    contentSlot('PlaceholderContentSlot', [flexTypeComponent('ProfileTagScriptComponent')]),

    contentSlot('BottomContent', []),
  ];
};
