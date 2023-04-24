import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { OccCmsPageExtended } from './index';

import PageRobots = Occ.PageRobots;

export const loginPage = (): OccCmsPageExtended => {
  return {
    uid: `loginPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title: `Login Page`,
    template: 'LoginPageTemplate',
    typeCode: 'ContentPage',
    name: 'Content Page',
    robotTag: PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots(breadcrumbComponent()),
        contentSlot('LeftContentSlot', [
          flexTypeComponent('ReturningCustomerLoginComponent'),
          flexTypeComponent('ReturningCustomerRegisterComponent'),
        ]),
        ...footerSlots(),
      ],
    },
    label: '/login',
  };
};

export const registerPage = (): OccCmsPageExtended => {
  return {
    uid: `loginPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title: `Register Page`,
    template: 'AccountPageTemplate',
    typeCode: 'ContentPage',
    name: 'Register Page',
    robotTag: PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots(breadcrumbComponent()),
        contentSlot('BodyContent', [flexTypeComponent('RegisterCustomerComponent')]),
        ...footerSlots(),
      ],
    },
    label: '/login/register',
  };
};
