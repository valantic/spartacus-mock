import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { breadcrumbComponent } from '../components/default/breadcrumb';
import { footerSlots } from '../slots/footer-slots';
import { bottomHeaderSlot, headerSlots } from '../slots/header-slots';
import { cmsSearchContentSlots } from '../slots/search-content-slots';

export const productCategoryPage = (): Occ.CMSPage => {
  return {
    uid: `categoryPage-${faker.datatype.uuid()}`,
    title: 'Product List',
    template: 'ProductListPageTemplate',
    typeCode: 'CategoryPage',
    name: 'Product List',
    robotTag: Occ.PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [
        ...headerSlots([bottomHeaderSlot([breadcrumbComponent()])]),
        ...cmsSearchContentSlots('ProductListSlot', 'CMSProductListComponent'),
        ...footerSlots(),
      ],
    },
  };
};
