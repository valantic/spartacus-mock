import { Occ } from '@spartacus/core';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { productDetailContentSlots } from '../slots/product-detail-content-slots';

export const productDetailPage = (productCode: string): Occ.CMSPage => {
  return {
    uid: `productDetailPage${productCode}`,
    title: `Product with Code ${productCode}`,
    template: 'ProductDetailsPageTemplate',
    typeCode: 'ProductPage',
    name: 'Product Detail Page',
    robotTag: Occ.PageRobots.INDEX_FOLLOW,
    contentSlots: {
      contentSlot: [...headerSlots(), ...productDetailContentSlots(), ...footerSlots()],
    },
  };
};
