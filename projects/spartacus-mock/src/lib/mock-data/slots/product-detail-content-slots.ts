import { contentSlot } from '../components/default/content-slot';
import { productReferencesComponent } from '../components/default/product-references';
import { cmsTabParagraphContainerComponent } from '../components/default/cms-tab-paragraph';
import { ContentSlot } from '../../types';

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
          'uuid': 'eyJpdGVtSWQiOiJQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.097Z',
          'name': 'ProductImagesComponent',
          'container': 'false',
          'flexType': 'ProductImagesComponent'
        },
        {
          'uid': 'ProductIntroComponent',
          'uuid': 'eyJpdGVtSWQiOiJQcm9kdWN0SW50cm9Db21wb25lbnQiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.107Z',
          'name': 'ProductIntroComponent',
          'container': 'false',
          'flexType': 'ProductIntroComponent'
        },
        {
          'uid': 'ProductSummaryComponent',
          'uuid': 'eyJpdGVtSWQiOiJQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.116Z',
          'name': 'ProductSummaryComponent',
          'container': 'false',
          'flexType': 'ProductSummaryComponent'
        },
        {
          'uid': 'VariantSelector',
          'uuid': 'eyJpdGVtSWQiOiJWYXJpYW50U2VsZWN0b3IiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          'typeCode': 'ProductVariantSelectorComponent',
          'modifiedtime': '2021-01-18T18:15:02.182Z',
          'name': 'Product Variant Selector',
          'container': 'false'
        }, {
        'uid': 'AddToCart',
        'uuid': 'eyJpdGVtSWQiOiJBZGRUb0NhcnQiLCJjYXRhbG9nSWQiOiJlbGVjdHJvbmljcy1zcGFDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
        'typeCode': 'ProductAddToCartComponent',
        'modifiedtime': '2021-01-18T18:15:02.149Z',
        'name': 'Product Add To Cart',
        'container': 'false'
      },
        {
          'uid': 'ConfigureProductComponent',
          'uuid': 'eyJpdGVtSWQiOiJDb25maWd1cmVQcm9kdWN0Q29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.159Z',
          'name': 'Configure Product Component',
          'container': 'false',
          'flexType': 'ConfigureProductComponent'
        },
        {
          'uid': 'AddToWishListComponent',
          'uuid': 'eyJpdGVtSWQiOiJBZGRUb1dpc2hMaXN0Q29tcG9uZW50IiwiY2F0YWxvZ0lkIjoiZWxlY3Ryb25pY3Mtc3BhQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.17Z',
          'name': 'AddToWishListComponent',
          'container': 'false',
          'flexType': 'AddToWishListComponent'
        },
        {
          'uid': 'StockNotificationComponent',
          'uuid': 'eyJpdGVtSWQiOiJTdG9ja05vdGlmaWNhdGlvbkNvbXBvbmVudCIsImNhdGFsb2dJZCI6ImVsZWN0cm9uaWNzLXNwYUNvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
          'typeCode': 'CMSFlexComponent',
          'modifiedtime': '2021-01-18T18:15:02.18Z',
          'name': 'StockNotificationComponent',
          'container': 'false',
          'flexType': 'StockNotificationComponent'
        }
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
      'TabsSlot',
      'Tabs',
      'Tabs Slot',
      [
        cmsTabParagraphContainerComponent('TabPanelContainer', 'Tab container', 'ProductDetailsTabComponent ProductSpecsTabComponent ProductReviewsTabComponent deliveryTab')
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
  ];
};
