import { faker } from '@faker-js/faker';
import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';
import { cmsTabParagraphContainerComponent } from '../components/cms-tab-paragraph';
import { productReferencesComponent } from '../components/product-references';

export const productDetailContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('Summary', [
      {
        uid: 'ProductImagesComponent',
        uuid: faker.string.uuid(),
        typeCode: 'CMSFlexComponent',
        modifiedtime: '2021-01-18T18:15:02.097Z',
        name: 'ProductImagesComponent',
        container: 'false',
        flexType: 'ProductImagesComponent',
      },
      {
        uid: 'ProductIntroComponent',
        uuid: faker.string.uuid(),
        typeCode: 'CMSFlexComponent',
        modifiedtime: '2021-01-18T18:15:02.107Z',
        name: 'ProductIntroComponent',
        container: 'false',
        flexType: 'ProductIntroComponent',
      },
      {
        uid: 'ProductSummaryComponent',
        uuid: faker.string.uuid(),
        typeCode: 'CMSFlexComponent',
        modifiedtime: '2021-01-18T18:15:02.116Z',
        name: 'ProductSummaryComponent',
        container: 'false',
        flexType: 'ProductSummaryComponent',
      },
      {
        uid: 'VariantSelector',
        uuid: faker.string.uuid(),
        typeCode: 'ProductVariantSelectorComponent',
        modifiedtime: '2021-01-18T18:15:02.182Z',
        name: 'Product Variant Selector',
        container: 'false',
      },
      {
        uid: 'AddToCart',
        uuid: faker.string.uuid(),
        typeCode: 'ProductAddToCartComponent',
        modifiedtime: '2021-01-18T18:15:02.149Z',
        name: 'Product Add To Cart',
        container: 'false',
      },
      {
        uid: 'ConfigureProductComponent',
        uuid: faker.string.uuid(),
        typeCode: 'CMSFlexComponent',
        modifiedtime: '2021-01-18T18:15:02.159Z',
        name: 'Configure Product Component',
        container: 'false',
        flexType: 'ConfigureProductComponent',
      },
      {
        uid: 'AddToWishListComponent',
        uuid: faker.string.uuid(),
        typeCode: 'CMSFlexComponent',
        modifiedtime: '2021-01-18T18:15:02.17Z',
        name: 'AddToWishListComponent',
        container: 'false',
        flexType: 'AddToWishListComponent',
      },
      {
        uid: 'StockNotificationComponent',
        uuid: faker.string.uuid(),
        typeCode: 'CMSFlexComponent',
        modifiedtime: '2021-01-18T18:15:02.18Z',
        name: 'StockNotificationComponent',
        container: 'false',
        flexType: 'StockNotificationComponent',
      },
    ]),

    contentSlot('Tabs', [
      cmsTabParagraphContainerComponent([
        'ProductDetailsTabComponent',
        'ProductSpecsTabComponent',
        'ProductReviewsTabComponent',
        'deliveryTab',
      ]),
    ]),

    contentSlot('UpSelling', [productReferencesComponent('SIMILAR', 'You may also like..')]),

    contentSlot('CrossSelling', [productReferencesComponent('ACCESSORIES', 'The best accessories..')]),

    contentSlot('PlaceholderContentSlot', [flexTypeComponent('ProfileTagScriptComponent')]),

    contentSlot('Section3', [flexTypeComponent('BundleCarouselComponent')]),
  ];
};
