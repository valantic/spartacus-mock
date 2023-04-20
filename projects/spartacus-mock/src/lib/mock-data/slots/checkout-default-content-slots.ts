import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';

export const checkoutDefaultContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'TopContent',
      []
    ),

    contentSlot(
      'PlaceholderContentSlot',
      [
        flexType('ProfileTagScriptComponent')
      ]
    ),

    contentSlot(
      'BottomContent',
      []
    ),
  ];
};
