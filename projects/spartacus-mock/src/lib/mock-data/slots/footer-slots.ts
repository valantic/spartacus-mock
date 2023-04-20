import { faker } from '@faker-js/faker';
import { profileScriptComponent } from '../components/default/profile-script';
import { footerNavigationComponent } from '../components/default/footer-navigation';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { ContentSlot } from '../../types';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const placeholderContentSlot = (slotId: string, slotPosition: string, slotName: string) => {
  return {
    slotId,
    slotUuid: faker.datatype.uuid(),
    position: slotPosition,
    name: slotName,
    slotShared: true,
    components: {
      component: [profileScriptComponent()],
    },
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
        flexTypeComponent('AnonymousConsentOpenDialogComponent'),
        cmsParagraphComponent(
          '<div class="cx-notice">Copyright © 2020 SAP SE or an SAP affiliate company. All rights reserved.</div>'
        ),
        flexTypeComponent('AnonymousConsentManagementBannerComponent'),
      ],
    },
  };
};

export const footerSlots = (): ContentSlot[] => {
  // shared footer slots
  return [
    placeholderContentSlot('PlaceholderContentSlot', 'PlaceholderContentSlot', 'Placeholder for Addon tag files'),
    footerSlot('FooterSlot', 'Footer', 'Footer'),
  ];
};
