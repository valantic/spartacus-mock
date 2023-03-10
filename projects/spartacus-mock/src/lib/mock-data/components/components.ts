import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { cmsLinkComponent } from './default/cms-link';
import { cmsFlexTypeComponent } from './default/cms-flex-type';

/*
 * This function is used to render additional data for components being loaded within the pages calls
 * For new mock pages, you need enhance the logic of the components route in the index.ts of the mock server
 */
export const components = (componentIds: string[]): Occ.ComponentList => {
  const componentData: Occ.ComponentList = {
    component: [],
  };

  for (const componentId of componentIds) {
    // TODO check what other components need component data
    if (componentId.endsWith('Link')) {
      const componentLinkText = faker.lorem.words(2);
      let componentCategoryCode = '';

      if (componentId.endsWith('CategoryLink')) {

        componentCategoryCode = faker.datatype.number(999).toString();

        componentData.component?.push(cmsLinkComponent(
          componentLinkText.replace(' ', '-'),
          componentId, // must match with the componentId from the pages call
          faker.datatype.uuid(),
          componentLinkText,
          `/mock/category/${componentLinkText.replace(' ', '-')}/c/${componentCategoryCode}`,
        ));
      } else {
        componentData.component?.push(cmsLinkComponent(
          componentLinkText.replace(' ', '-'),
          componentId, // must match with the componentId from the pages call
          faker.datatype.uuid(),
          componentLinkText,
          `/${faker.lorem.word()}`,
        ));
      }
    }
  }

  return componentData;
};

export const navMainLinkComponents = (componentIds: string[]): Occ.ComponentList => {
  const componentData: Occ.ComponentList = {
    component: [],
  };

  for (const componentId of componentIds) {
    const componentLinkText = faker.lorem.words(2);

    componentData.component?.push(cmsLinkComponent(
      componentId,
      componentId, // must match with the componentId from the pages call
      faker.datatype.uuid(),
      // link text is derived from componentId
      componentLinkText,
      `/${componentId.split('_').join('/')}`,
    ));
  }

  return componentData;
};

export const myAccountLinkComponents = (componentIds: string[]): Occ.ComponentList => {
  const componentData: Occ.ComponentList = {
    component: [],
  };

  for (const componentId of componentIds) {
    // link target is derived from componentId besides if it's the logout link
    let linkUrl = componentId.replace(/([^A-Z])([A-Z])/g, '$1-$2').substring(0, (componentId.length - 3)).toLowerCase();

    if (componentId === 'SignOutLink') {
      // signout link needs to use the route "logout" to keep the CdcLogoutGuard working
      linkUrl = 'logout';
    }

    componentData.component?.push(cmsLinkComponent(
      componentId,
      componentId, // must match with the componentId from the pages call
      faker.datatype.uuid(),
      // link text is derived from componentId
      componentId.replace(/([^A-Z])([A-Z])/g, '$1 $2').substring(0, (componentId.length - 3)),
      linkUrl,
    ));
  }

  return componentData;
};

export const footerLinkComponents = (componentIds: string[]): Occ.ComponentList => {
  const componentData: Occ.ComponentList = {
    component: [],
  };

  for (const componentId of componentIds) {
    const componentLinkText = faker.lorem.words(2);

    const url = componentId.startsWith('footer_social') ? 'https://www.google.ch' : `/${componentId.split('_').join('/')}`;
    const external = componentId.startsWith('footer_social') ? 'true': 'false';
    const target = componentId.startsWith('footer_social') ? 'true': 'false';

    componentData.component?.push(cmsLinkComponent(
      componentId,
      componentId, // must match with the componentId from the pages call
      faker.datatype.uuid(),
      // link text is derived from componentId
      componentLinkText,
      url,
      external,
      target
    ));
  }

  return componentData;
};

export const productDetailTabComponents = (componentIds: string[]): Occ.ComponentList => {
  const componentData: Occ.ComponentList = {
    component: [],
  };
  const tabUidMap: any = {
    // device tab components
    'productdetail_operating_modes_component': 'ValanticProductOperatingModesComponent',
    'productdetail_main_features_component': 'ValanticProductMainFeaturesComponent',
    'productdetail_technical_features_component': 'ValanticProductTechnicalFeaturesComponent',
    'productdetail_documents_component': 'ValanticProductDocumentsComponent',
    'productdetail_how_to_component': 'ValanticProductHowToComponent',
    'productdetail_included_accessories_component': 'ValanticProductIncludedAccessoryComponent',

    // accessory tab components
    'productdetail_accessory_details_component': 'ValanticProductAccessoryDetailsComponent',
    'productdetail_accessory_compatibility_component': 'ValanticProductAccessoryCompatibilityComponent'
  }

  componentIds.forEach((id) => {
    if (id) {
      componentData.component?.push(
        cmsFlexTypeComponent(id, tabUidMap[id], tabUidMap[id], faker.datatype.uuid())
      )
    }
  })

  return componentData;
};
