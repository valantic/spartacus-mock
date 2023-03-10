import { faker } from '@faker-js/faker';
import { headerSlots } from '../slots/header-slots';
import { footerSlots } from '../slots/footer-slots';
import { contentSlot } from '../components/default/content-slot';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';

export const tempPage = (pageType: string, pageLabelOrId: string) => {
  return {
    uid: `contentPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title: `Temp Page with label ${pageLabelOrId}`,
    template: 'ContentPage1Template',
    typeCode: pageType,
    name: 'Content Page',
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [
        ...headerSlots(),
        contentSlot(
          'CsnMainSlot-Homepage',
          'csn_main',
          'CsnMain Slot for Homepage',
          [
            cmsParagraphComponent('RichTextExampleParagraph', 'CMS Content Text Paragraph', `<h1>Oooups</h1><p>The page of type <b>"${pageType}"</b> with the label <b>"${pageLabelOrId}"</b> has not been mocked yet.</p>`),
          ]
        ),
        ...footerSlots()
      ]
    },
  };
};
