import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { footerSlots } from '../slots/footer-slots';
import { bottomHeaderSlot, headerSlots } from '../slots/header-slots';

export const loginPage = (): Occ.CMSPage => {
  return {
    uid: `loginPage${faker.datatype.number(1000)}`,
    title: `Login Page`,
    template: 'LoginPageTemplate',
    typeCode: 'ContentPage',
    name: 'Content Page',
    robotTag: Occ.PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
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

export const registerPage = (): Occ.CMSPage => {
  return {
    uid: `loginPage${faker.datatype.number(1000)}`,
    title: `Register Page`,
    template: 'AccountPageTemplate',
    typeCode: 'ContentPage',
    name: 'Register Page',
    robotTag: Occ.PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
        contentSlot('BodyContent', [flexTypeComponent('RegisterCustomerComponent')]),
        ...footerSlots(),
      ],
    },
    label: '/login/register',
  };
};
