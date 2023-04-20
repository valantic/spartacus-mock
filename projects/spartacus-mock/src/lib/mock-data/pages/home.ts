import { faker } from '@faker-js/faker';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { homeContentSlots } from '../slots/home-content-slots';

export const homePage = () => {
  return {
    uid: 'homepage',
    uuid: faker.datatype.uuid(),
    title: 'Homepage',
    template: 'LandingPage2Template',
    typeCode: 'ContentPage',
    name: 'Homepage',
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [...headerSlots(), ...homeContentSlots(), ...footerSlots()],
    },
  };
};
