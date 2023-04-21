import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';

export const accountCloseAccountSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('BodyContent', [
      cmsParagraphComponent(
        'When you close your account, your profile information will be kept for the retention period mandated by the laws and regulations of your country. Customer Support will be able to assist you with any order history or proof of purchase needs during this time.<br/><br/>At the end of the retention period, the following profile information will be deleted and will no longer be accessible to you or anyone else:<br/><br/><ul><li>email addresses</li><li>contact information</li><li>shipping details</li><li>delivery preferences</li><li>consent management settings</li><li>account history</li><li>payment details</li><li>order history</li></ul>'
      ),
      flexTypeComponent('CloseAccountComponent'),
    ]),
  ];
};
