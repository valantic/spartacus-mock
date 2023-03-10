import { navigationNodeComponent } from './navigation-node';
import { Component } from '../../../types';

export const footerNavigationComponent = (): Component => {
  return {
    uid: `FooterNavigationComponent`,
    uuid: 'eyJpdGVtSWQiOiJGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
    typeCode: 'FooterNavigationComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name: `Footer Navigation Component`,
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
          children: [{
            uid: 'AboutSAPCommerceNavNode',
            entries: [{
              itemId: 'AboutSAPCommerceLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          },
            {
              uid: 'FAQNavNode',
              entries: [{
                itemId: 'FAQLink',
                itemSuperType: 'AbstractCMSComponent',
                itemType: 'CMSLinkComponent'
              }],
              children: []
            }],
          title: 'Footer Title 1'
        },
        {
          uid: 'SAPCustomerExperienceNavNode',
          entries: [],
          children: [{
            uid: 'AboutSAPCustomerExperienceNavNode',
            entries: [{
              itemId: 'VisitSAPLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          }, {
            uid: 'ContactUsNavNode',
            entries: [{
              itemId: 'ContactUsLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          }],
          title: 'Footer Title 2'
        },
        {
          uid: 'FollowUsNavNode',
          entries: [],
          children: [{
            uid: 'AgileCommerceBlogNavNode',
            entries: [{
              itemId: 'AgileCommerceBlogLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          }, {
            uid: 'LinkedInNavNode',
            entries: [{
              itemId: 'LinkedInLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          }, {
            uid: 'FacebookNavNode',
            entries: [{
              itemId: 'FacebookLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          }, {
            uid: 'TwitterNavNode',
            entries: [{
              itemId: 'TwitterLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent'
            }],
            children: []
          }],
          title: 'Footer Title 3'
        }
      ]
    )
  };
};
