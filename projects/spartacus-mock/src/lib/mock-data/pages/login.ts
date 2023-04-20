import { faker } from '@faker-js/faker';
import { headerSlots } from '../slots/header-slots';
import { footerSlots } from '../slots/footer-slots';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { contentSlot } from '../components/default/content-slot';
import { Page } from './index';
import {flexTypeComponent} from "../components/default/flex-type-component";

export const loginPage = (pageType: string, pageLabelOrId: string): Page => {
  return {
    uid: `loginPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title: `Login Page`,
    template: 'LoginPageTemplate',
    typeCode: pageType,
    name: 'Content Page',
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [
        ...headerSlots(breadcrumbComponent()),
        contentSlot(
          'LeftContentSlot',
          [
            flexTypeComponent('ReturningCustomerLoginComponent'),
            flexTypeComponent('ReturningCustomerRegisterComponent'),
          ]
        ),
        ...footerSlots()
      ]
    },
    label: pageLabelOrId
  };
};

export const registerPage = (pageType: string, pageLabelOrId: string): Page => {
  return {
    uid: `loginPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title: `Register Page`,
    template: 'AccountPageTemplate',
    typeCode: pageType,
    name: 'Register Page',
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [
        ...headerSlots(breadcrumbComponent()),
        contentSlot(
          'BodyContent',
          [
            flexTypeComponent('RegisterCustomerComponent'),
          ]
        ),
        ...footerSlots()
      ]
    },
    label: pageLabelOrId
  };
};
