import { Occ } from '@spartacus/core';
import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { flexTypeComponent } from '../components/default/flex-type-component';
import { footerNavigationComponent } from '../components/default/footer-navigation';
import { profileScriptComponent } from '../components/default/profile-script';

export const placeholderContentSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'PlaceholderContentSlot',
    position: 'PlaceholderContentSlot',
    name: 'Placeholder Content Slot',
    slotShared: true,
    components: {
      component: [profileScriptComponent()],
    },
  };
};

export const footerSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'FooterSlot',
    position: 'Footer',
    name: 'Footer Slot',
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
  return [placeholderContentSlot(), footerSlot()];
};
