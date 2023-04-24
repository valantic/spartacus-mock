import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { cmsSearchContentSlots } from '../slots/search-content-slots';
import { OccCmsPageExtended } from './index';

import PageRobots = Occ.PageRobots;

export const productCategoryPage = (): OccCmsPageExtended => {
  return {
    uid: `categoryPage-${faker.datatype.uuid()}`,
    uuid: faker.datatype.uuid(),
    title: 'Product List',
    template: 'ProductListPageTemplate',
    typeCode: 'CategoryPage',
    name: 'Product List',
    robotTag: PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots(breadcrumbComponent()),
        ...cmsSearchContentSlots('ProductListSlot', 'CMSProductListComponent'),
        ...footerSlots(),
      ],
    },
  };
};
