import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';

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
