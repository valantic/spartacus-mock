import { faker } from '@faker-js/faker';
import { headerSlots } from '../slots/header-slots';
import { footerSlots } from '../slots/footer-slots';
import { cmsPageContentSlotsNotFound } from '../slots/cms-page-content-slots-not-found';
import { cmsPageContentSlots } from '../slots/cms-page-content-slots';
import { cmsCartContentSlots } from '../slots/cart-content-slots';
import { cmsPageContentSlotsFlexTypeComponent } from '../slots/cms-page-content-slots-flex-type-component';
import { loginPage } from './login';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { ContentSlot } from '../../types';

export interface Page {
  uid: string;
  uuid: string;
  title: string;
  template: string;
  typeCode: string;
  name: string;
  robotTag: string;
  contentSlots: {
    contentSlot: ContentSlot[];
  };
  label: string;
  pageId?: string;
}

export interface Pages {
  [key: string]: Page;
}

interface AdditionalData {
  template?: string;
  uid?: string;
}

const contentPage = (
  pageType: string,
  pageLabelOrId: string,
  title: string,
  name: string,
  contentSlots: ContentSlot[],
  additionalData?: AdditionalData,
): Page => {
  const { template, uid } = additionalData || {};

  return {
    uid: uid ?? `contentPage${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    title,
    template: template ?? 'ContentPage1Template',
    typeCode: pageType,
    name,
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [...headerSlots(breadcrumbComponent()), ...contentSlots, ...footerSlots()],
    },
    label: pageLabelOrId,
  };
};

/**
 * !!! Please note: !!!
 *
 * The mock server compares the routes by using startsWith(), therefore, routes starting with the same word
 * need to be in the correct order!!!
 *
 */
export const contentPages = (): Pages => {
  return {
    login: loginPage('ContentPage', '/login'),
    logout: contentPage('ContentPage', '/logout', 'Logout', 'Logout', cmsPageContentSlots()),
    account: contentPage(
      'ContentPage',
      '/account',
      'Account Overview',
      'Account Overview',
      cmsPageContentSlotsFlexTypeComponent('account_overview_component', 'Account Overview', 'ValanticAccountOverviewComponent')
    ),
    'not-found': contentPage(
      'ContentPage',
      '/not-found',
      'Page not found',
      'Page Not found',
      cmsPageContentSlotsNotFound()
    ),
    cart: contentPage('ContentPage', '/cart', 'Your shopping cart', 'Cart Page', cmsCartContentSlots(), { template: 'CartPageTemplate', uid: 'cartPage' }),
    search: contentPage(
      'ContentPage',
      '/search',
      'Search',
      'Search',
      cmsPageContentSlotsFlexTypeComponent('SearchResultsListComponent', 'Search Component', 'SearchResultsListComponent')
    ),
  };
};
