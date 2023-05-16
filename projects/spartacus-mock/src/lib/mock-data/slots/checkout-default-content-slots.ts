import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const checkoutDefaultContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('TopContent', []),

    contentSlot('PlaceholderContentSlot', [flexTypeComponent('ProfileTagScriptComponent')]),

    contentSlot('BottomContent', [
      cmsParagraphComponent(
        '<strong>Need Help with your checkout process?</strong> <span>Contact Us or Call phone number.</span>'
      ),
    ]),
  ];
};
