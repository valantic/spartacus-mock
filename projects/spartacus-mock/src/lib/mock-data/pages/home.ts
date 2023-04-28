import { Occ } from '@spartacus/core';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { homeContentSlots } from '../slots/home-content-slots';

export const homePage = (): Occ.CMSPage => {
  return {
    uid: 'homepage',
    title: 'Homepage',
    template: 'LandingPage2Template',
    typeCode: 'ContentPage',
    name: 'Homepage',
    robotTag: Occ.PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [...headerSlots(), ...homeContentSlots(), ...footerSlots()],
    },
  };
};
