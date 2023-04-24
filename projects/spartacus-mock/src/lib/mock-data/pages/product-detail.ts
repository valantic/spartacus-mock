import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { productDetailContentSlots } from '../slots/product-detail-content-slots';
import { OccCmsPageExtended } from './index';

import PageRobots = Occ.PageRobots;

export const productDetailPage = (productCode: string): OccCmsPageExtended => {
  return {
    uid: `productDetailPage${productCode}`,
    uuid: faker.datatype.uuid(),
    title: `Product with Code ${productCode}`,
    template: 'ProductDetailsPageTemplate',
    typeCode: 'ProductPage',
    name: 'Product Detail Page',
    robotTag: PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [...headerSlots(), ...productDetailContentSlots(), ...footerSlots()],
    },
  };
};
