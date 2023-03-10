import { faker } from '@faker-js/faker';
import { profileScriptComponent } from '../components/default/profile-script';
import { footerNavigationComponent } from '../components/default/footer-navigation';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { ContentSlot } from '../../types';

export const placeholderContentSlot = (slotId: string, slotPosition: string, slotName: string) => {
  return {
    slotId,
    slotUuid: faker.datatype.uuid(),
    position: slotPosition,
    name: slotName,
    slotShared: true,
    components: {
      component: [
        profileScriptComponent()
      ]
    }
  };
};

export const footerSlot = (slotId: string, slotPosition: string, slotName: string) => {
  return {
    slotId,
    slotUuid: faker.datatype.uuid(),
    position: slotPosition,
    name: slotName,
    slotShared: true,
    components: {
      component: [
        footerNavigationComponent(),
        cmsFlexTypeComponent('AnonymousConsentOpenDialogComponent', 'Anonymous Consent Open Dialog Component', 'AnonymousConsentOpenDialogComponent', 'eyJpdGVtSWQiOiJBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ=='),
        cmsParagraphComponent('NoticeTextParagraph', 'Notice Text Paragraph', '<div class="cx-notice">Copyright © 2020 SAP SE or an SAP affiliate company. All rights reserved.</div>'),
        cmsFlexTypeComponent('AnonymousConsentManagementBannerComponent', 'Anonymous Consent Management Banner Component', 'AnonymousConsentManagementBannerComponent', 'eyJpdGVtSWQiOiJBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==')
      ]
    }
  };
};

export const footerSlots = (): ContentSlot[] => {
  // shared footer slots
  return [
    placeholderContentSlot('PlaceholderContentSlot', 'PlaceholderContentSlot', 'Placeholder for Addon tag files'),
    footerSlot('FooterSlot', 'Footer', 'Footer')
  ];
};
