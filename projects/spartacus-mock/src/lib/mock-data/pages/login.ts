import { faker } from '@faker-js/faker';
import { headerSlots } from '../slots/header-slots';
import { footerSlots } from '../slots/footer-slots';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { contentSlot } from '../components/default/content-slot';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import { Page } from './index';

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
          'LeftContentSlot-login',
          'LeftContentSlot',
          'Left Content Slot for Customer Login',
          [
            cmsFlexTypeComponent('ReturningCustomerLoginComponent', 'Returning Customer Login Component', 'ReturningCustomerLoginComponent', faker.datatype.uuid()),
            cmsFlexTypeComponent('ReturningCustomerRegisterComponent', 'Returning Customer Register Component', 'ReturningCustomerRegisterComponent', faker.datatype.uuid()),
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
          'BodyContentSlot-register',
          'BodyContent',
          'Body Content Slot for Register',
          [
            cmsFlexTypeComponent('RegisterCustomerComponent', 'Register Customer Component', 'RegisterCustomerComponent', faker.datatype.uuid()),
          ]
        ),
        ...footerSlots()
      ]
    },
    label: pageLabelOrId
  };
};
