import { faker } from '@faker-js/faker';
import { Component, ContentSlot } from '../../types';
import { categoryNavigationComponent } from '../components/default/category-navigation';
import { cmsLinkComponent } from '../components/default/cms-link';
import { miniCartComponent } from '../components/default/mini-cart';
import { searchBoxComponent } from '../components/default/search-box';
import { simpleBannerComponent } from '../components/default/simple-banner';
import { siteContextComponent } from '../components/default/site-context';
import { Occ } from '@spartacus/core';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const siteLogoSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'siteLogoSlot',
    position: 'SiteLogo',
    name: 'Site Logo Slot',
    slotShared: true,
    components: {
      component: [simpleBannerComponent('/')],
    },
  };
};

export const miniCartSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'MiniCartSlot',
    position: 'MiniCart',
    name: 'Mini Cart Slot',
    slotShared: true,
    components: {
      component: [miniCartComponent()],
    },
  };
};

export const homepageNavLinkSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'homepageNavLinkSlot',
    position: 'HomepageNavLink',
    name: 'Homepage Nav Link Slot',
    slotShared: true,
    components: {
      component: [
        cmsLinkComponent(
          'Home Page Nav Link',
          'HomepageNavLink',
          'eyJpdGVtSWQiOiJIb21lcGFnZU5hdkxpbmsiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          'Home',
          '/',
          'false',
          'false',
          'homepage',
          'homepage'
        ),
      ],
    },
  };
};

export const headerLinksSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'HeaderLinksSlot',
    position: 'HeaderLinks',
    name: 'Header Links Slot',
    slotShared: true,
    components: {
      component: [
        flexTypeComponent('NavigationComponent', undefined, {
          styleClass: 'accNavComponent',
          navigationNode: {
            uid: 'MyAccountNavNode',
            uuid: 'eyJpdGVtSWQiOiJNeUFjY291bnROYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
            // @ts-ignore
            entries: [],
            children: [
              {
                uid: 'OrderHistoryNavNode',
                uuid: 'eyJpdGVtSWQiOiJPcmRlckhpc3RvcnlOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'OrdersLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                // @ts-ignore
                children: [],
              },
              {
                uid: 'WishListNavNode',
                uuid: 'eyJpdGVtSWQiOiJXaXNoTGlzdE5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'WishListLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'SavedCartsNavNode',
                uuid: 'eyJpdGVtSWQiOiJTYXZlZENhcnRzTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'SavedCartsLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'AddressBookNavNode',
                uuid: 'eyJpdGVtSWQiOiJBZGRyZXNzQm9va05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'AddressBookLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'PaymentDetailsNavNode',
                uuid: 'eyJpdGVtSWQiOiJQYXltZW50RGV0YWlsc05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'PaymentDetailsLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'PersonalDetailsNavNode',
                uuid: 'eyJpdGVtSWQiOiJQZXJzb25hbERldGFpbHNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'PersonalDetailsLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'ChangePasswordNavNode',
                uuid: 'eyJpdGVtSWQiOiJDaGFuZ2VQYXNzd29yZE5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'UpdatePasswordLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'UpdateEmailNavNode',
                uuid: 'eyJpdGVtSWQiOiJVcGRhdGVFbWFpbE5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'UpdateEmailLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'ConsentManagementNavNode',
                uuid: 'eyJpdGVtSWQiOiJDb25zZW50TWFuYWdlbWVudE5hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'ConsentManagementLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'CloseAccountNavNode',
                uuid: 'eyJpdGVtSWQiOiJDbG9zZUFjY291bnROYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'CloseAccountLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'MyInterestsNavNode',
                uuid: 'eyJpdGVtSWQiOiJNeUludGVyZXN0c05hdk5vZGUiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
                entries: [
                  {
                    itemId: 'MyInterestsLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'NotificationPreferenceNavNode',
                uuid: 'eyJpdGVtSWQiOiJOb3RpZmljYXRpb25QcmVmZXJlbmNlTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'NotificationPreferenceLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'MyCouponsNavNode',
                uuid: 'eyJpdGVtSWQiOiJNeUNvdXBvbnNOYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
                entries: [
                  {
                    itemId: 'MyCouponsLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'QuickOrderNavNode',
                uuid: 'eyJpdGVtSWQiOiJRdWlja09yZGVyTmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'QuickOrderLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
              {
                uid: 'SignOutNavNode',
                uuid: 'eyJpdGVtSWQiOiJTaWduT3V0TmF2Tm9kZSIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
                entries: [
                  {
                    itemId: 'SignOutLink',
                    itemSuperType: 'AbstractCMSComponent',
                    itemType: 'CMSLinkComponent',
                  },
                ],
                children: [],
              },
            ],
            title: 'My Account',
          },
        }),
      ],
    },
  };
};

export const searchBoxSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'SearchBoxSlot',
    position: 'SearchBox',
    name: 'Search Box Slot',
    slotShared: true,
    components: {
      component: [searchBoxComponent()],
    },
  };
};

export const topHeaderSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'TopHeaderSlot',
    position: 'TopHeaderSlot',
    name: 'Top Header SLot',
    slotShared: true,
    components: {
      component: [],
    },
  };
};

// containing language / currency selector
export const siteContextSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'SiteContextSlot',
    position: 'SiteContext',
    name: 'Site Context Slot',
    slotShared: true,
    components: {
      component: [siteContextComponent('LANGUAGE'), siteContextComponent('CURRENCY')],
    },
  };
};

// containg storefinder / contact us / help meta nav links
export const siteLinksSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'SiteLinksSlot',
    position: 'SiteLinks',
    name: 'Site Links Slot',
    slotShared: true,
    components: {
      component: [
        cmsLinkComponent(
          'Quick Order Link',
          'QuickOrderLink',
          'eyJpdGVtSWQiOiJRdWlja09yZGVyTGluayIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ=',
          'Quick Order',
          '/my-account/quick-order',
          'false',
          'false'
        ),
        cmsLinkComponent(
          'Store Finder Link',
          'StoreFinderLink',
          'eyJpdGVtSWQiOiJTdG9yZUZpbmRlckxpbmsiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          'Find a Store',
          '/store-finder',
          'false',
          'false',
          'storefinderPage',
          '/store-finder'
        ),
        cmsLinkComponent(
          'Contact Us Link',
          'ContactUsLink',
          'eyJpdGVtSWQiOiJDb250YWN0VXNMaW5rIiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          'Contact Us',
          '/example-content',
          'false',
          'false'
        ),
        cmsLinkComponent(
          'Help Link',
          'HelpLink',
          'eyJpdGVtSWQiOiJIZWxwTGluayIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
          'Help',
          '/example-content',
          'false',
          'false'
        ),
      ],
    },
  };
};

export const navigationBarSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'NavigationBarSlot',
    position: 'NavigationBar',
    name: 'Navigation Bar Slot',
    slotShared: true,
    components: {
      component: [categoryNavigationComponent()],
    },
  };
};

export const bottomHeaderSlot = (additionalComponents: Component[] = []): Occ.ContentSlot => {
  return {
    slotId: 'BottomHeaderSlot',
    position: 'BottomHeaderSlot',
    name: 'Bottom Header Slot',
    slotShared: true,
    components: {
      component: additionalComponents,
    },
  };
};

export const headerSlots = (additionalSlots: ContentSlot[] = []): ContentSlot[] => {
  // shared header slots
  return [
    siteLogoSlot(),
    miniCartSlot(),
    homepageNavLinkSlot(),
    headerLinksSlot(),
    searchBoxSlot(),
    topHeaderSlot(),
    siteContextSlot(),
    siteLinksSlot(),
    navigationBarSlot(),
    bottomHeaderSlot(),
    ...additionalSlots,
  ];
};
