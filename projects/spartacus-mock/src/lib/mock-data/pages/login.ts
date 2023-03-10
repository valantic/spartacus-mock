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
            cmsFlexTypeComponent('ReturningCustomerLoginComponent', 'Returning Customer Login Component', 'ReturningCustomerLoginComponent', 'eyJpdGVtSWQiOiJSZXR1cm5pbmdDdXN0b21lckxvZ2luQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9'),
            cmsFlexTypeComponent('ReturningCustomerRegisterComponent', 'Returning Customer Register Component', 'ReturningCustomerRegisterComponent', 'eyJpdGVtSWQiOiJSZXR1cm5pbmdDdXN0b21lclJlZ2lzdGVyQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9'),
          ]
        ),
        ...footerSlots()
      ]
    },
    label: pageLabelOrId
  };
};
