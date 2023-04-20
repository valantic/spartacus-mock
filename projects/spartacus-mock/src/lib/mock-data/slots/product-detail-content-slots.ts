import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';
import { faker } from '@faker-js/faker';

export const productDetailContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'ProductSummarySlot',
      'Summary',
      'Summary for product details',
      [
        {
          'uid': 'ProductImagesComponent',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.097Z',
          'name': 'ProductImagesComponent',
          'container': 'false',
          'flexType': 'ProductImagesComponent'
        },
        {
          'uid': 'ProductIntroComponent',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.107Z',
          'name': 'ProductIntroComponent',
          'container': 'false',
          'flexType': 'ProductIntroComponent'
        },
        {
          'uid': 'ProductSummaryComponent',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.116Z',
          'name': 'ProductSummaryComponent',
          'container': 'false',
          'flexType': 'ProductSummaryComponent'
        },
        {
          'uid': 'VariantSelector',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'ProductVariantSelectorComponent',
          'modifiedtime': '2021-01-18T18:15:02.182Z',
          'name': 'Product Variant Selector',
          'container': 'false'
        }, {
        'uid': 'AddToCart',
        'uuid': faker.datatype.uuid(),
        'typeCode': 'ProductAddToCartComponent',
        'modifiedtime': '2021-01-18T18:15:02.149Z',
        'name': 'Product Add To Cart',
        'container': 'false'
      },
        {
          'uid': 'ConfigureProductComponent',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.159Z',
          'name': 'Configure Product Component',
          'container': 'false',
          'flexType': 'ConfigureProductComponent'
        },
        {
          'uid': 'AddToWishListComponent',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.17Z',
          'name': 'AddToWishListComponent',
          'container': 'false',
          'flexType': 'AddToWishListComponent'
        },
        {
          'uid': 'StockNotificationComponent',
          'uuid': faker.datatype.uuid(),
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.18Z',
          'name': 'StockNotificationComponent',
          'container': 'false',
          'flexType': 'StockNotificationComponent'
        }
      ]
    ),

    contentSlot(
      'TabsSlot',
      'Tabs',
      'Tabs Slot',
      [
        cmsTabParagraphContainerComponent('TabPanelContainer', 'Tab container', 'ProductDetailsTabComponent ProductSpecsTabComponent ProductReviewsTabComponent deliveryTab')
      ]
    ),

    contentSlot(
      'UpSellingSlot',
      'UpSelling',
      'Up Selling Slot',
      [
        productReferencesComponent('SimilarProducts', 'Similar Products', 'SIMILAR', 'You may also like..')
      ]
    ),

    contentSlot(
      'CrossSellingSlot',
      'CrossSelling',
      'Cross Selling Slot',
      [
        productReferencesComponent('AccessoryProducts', 'Accessory Products', 'ACCESSORIES', 'The best accessories..')
      ]
    ),

    contentSlot(
      'PlaceholderContentSlot',
      'PlaceholderContentSlot',
      'PlaceholderContentSlot',
      [
        flexType('ProfileTagScriptComponent')
      ]
    ),

    contentSlot(
      'Section3-ProductDetailsSlot',
      'Section3',
      'Section3 Product Details Page',
      [
        flexType('BundleCarouselComponent')
      ]
    ),
  ];
};
