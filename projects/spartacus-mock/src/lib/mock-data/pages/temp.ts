import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { contentSlot } from '../components/default/content-slot';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { OccCmsPageExtended } from './index';

import PageRobots = Occ.PageRobots;

export const tempPage = (pageType: string, pageLabelOrId: string): OccCmsPageExtended => {
  return {
    uid: `contentPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title: `Temp Page with label ${pageLabelOrId}`,
    template: 'ContentPage1Template',
    typeCode: pageType,
    name: 'Content Page',
    robotTag: PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots(),
        contentSlot('Section2A', [
          cmsParagraphComponent(
            `<h1>Oooups</h1><p>The page of type <b>"${pageType}"</b> with the label <b>"${pageLabelOrId}"</b> has not been mocked yet.</p>`
          ),
        ]),
        ...footerSlots(),
      ],
    },
  };
};
