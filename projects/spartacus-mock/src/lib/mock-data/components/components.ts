import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { cmsLinkComponent } from './default/cms-link';
import { cmsFlexTypeComponent } from './default/cms-flex-type';
import { cmsParagraphComponent, richTextExampleContent } from './default/cms-paragraph';

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
    let linkUrl = `my-account/${componentId.replace('Link', '').replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())}`;

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
    ProductDetailsTabComponent: 'ProductDetailsTabComponent',
    ProductSpecsTabComponent: 'ProductSpecsTabComponent',
    ProductReviewsTabComponent: 'ProductReviewsTabComponent',
    deliveryTab: 'deliveryTab',
  }

  componentIds.forEach((id) => {
    if (id) {
      if (id === 'deliveryTab') {
        componentData.component?.push(
          cmsParagraphComponent('deliveryTab', 'Delivery tab', '<div class=\\"tab-delivery\\">Lorem ipsum dolor sit amet, dolor sed, ut nam ut. Senectus mauris egestas a massa, enim placeat wisi congue purus fermentum. Ut aptent mauris dapibus congue in sit. Sed dolor varius amet feugiat volutpat dignissim, pede a rhoncus sodales aliquam adipiscing, dapibus massa fusce. Dui egestas ornare urna nibh facilisi, cras posuere. Lorem aliquam accumsan eleifend sem libero lorem, aliquam sequi sed urna nec. Eget dolor quisque dolor, amet suspendisse ullamcorper minus elit lectus nunc, est mattis dui id eu et facilisis, conubia sit tristique. Ac fusce gravida condimentum iaculis neque, a platea curabitur accumsan porttitor vel justo. Amet potenti ac, eget amet ducimus sit nulla, ac porttitor rhoncus, justo proin tortor integer turpis nulla vitae. Egestas mollis litora nunc platea dui, eu semper mauris diam, erat quam, porta maecenas fusce libero non aliquet. Amet tellus taciti ligula sed sollicitudin, nonummy cursus enim, hendrerit nec, sed lacus sed at sit quis, semper a arcu mollis sapien nec pretium. Ante mauris eros nec, nonummy mauris, nulla lacinia vel. Volutpat luctus velit eu.</div>')
        )
      } else {
        componentData.component?.push(
          cmsFlexTypeComponent(id, tabUidMap[id], tabUidMap[id], faker.datatype.uuid())
        )
      }
    }
  })

  return componentData;
};
