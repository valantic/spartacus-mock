import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { homeContentSlots } from '../slots/home-content-slots';
import { OccCmsPageExtended } from './index';

import PageRobots = Occ.PageRobots;

export const homePage = (): OccCmsPageExtended => {
  return {
    uid: 'homepage',
    uuid: faker.datatype.uuid(),
    title: 'Homepage',
    template: 'LandingPage2Template',
    typeCode: 'ContentPage',
    name: 'Homepage',
    robotTag: PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [...headerSlots(), ...homeContentSlots(), ...footerSlots()],
    },
  };
};
