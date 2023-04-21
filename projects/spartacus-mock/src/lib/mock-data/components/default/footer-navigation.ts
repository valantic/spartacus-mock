import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';
import { navigationNodeComponent } from './navigation-node';

export const footerNavigationComponent = (): Component => {
  return flexTypeComponent('FooterNavigationComponent', undefined, {
    showLanguageCurrency: 'true',
    wrapAfter: '4',
    notice: 'Copyright © 2021 SAP SE or an SAP affiliate company. All rights reserved.',
    navigationNode: navigationNodeComponent(
      'FooterNavNode',
      [],
      [
        {
          uid: 'SAPCommerceNavNode',
          entries: [],
          children: [
            {
              uid: 'AboutSAPCommerceNavNode',
              entries: [
                {
                  itemId: 'AboutSAPCommerceLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
            {
              uid: 'FAQNavNode',
              entries: [
                {
                  itemId: 'FAQLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
          ],
          title: 'Footer Title 1',
        },
        {
          uid: 'SAPCustomerExperienceNavNode',
          entries: [],
          children: [
            {
              uid: 'AboutSAPCustomerExperienceNavNode',
              entries: [
                {
                  itemId: 'VisitSAPLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
            {
              uid: 'ContactUsNavNode',
              entries: [
                {
                  itemId: 'ContactUsLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
          ],
          title: 'Footer Title 2',
        },
        {
          uid: 'FollowUsNavNode',
          entries: [],
          children: [
            {
              uid: 'AgileCommerceBlogNavNode',
              entries: [
                {
                  itemId: 'AgileCommerceBlogLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
            {
              uid: 'LinkedInNavNode',
              entries: [
                {
                  itemId: 'LinkedInLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
            {
              uid: 'FacebookNavNode',
              entries: [
                {
                  itemId: 'FacebookLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
            {
              uid: 'TwitterNavNode',
              entries: [
                {
                  itemId: 'TwitterLink',
                  itemSuperType: 'AbstractCMSComponent',
                  itemType: 'CMSLinkComponent',
                },
              ],
              children: [],
            },
          ],
          title: 'Footer Title 3',
        },
      ]
    ),
  });
};
