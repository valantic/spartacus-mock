import { faker } from '@faker-js/faker';
import { footerSlots } from '../slots/footer-slots';
import { headerSlots } from '../slots/header-slots';
import { productDetailContentSlots } from '../slots/product-detail-content-slots';

export const productDetailPage = (productCode: string) => {
  return {
    uid: `productDetailPage${productCode}`,
    uuid: faker.datatype.uuid(),
    title: `Product with Code ${productCode}`,
    template: 'ProductDetailsPageTemplate',
    typeCode: 'ProductPage',
    name: 'Product Detail Page',
    robotTag: 'INDEX_FOLLOW',
    contentSlots: {
      contentSlot: [...headerSlots(), ...productDetailContentSlots(), ...footerSlots()],
    },
  };
};
