import { contentSlot } from '../components/default/content-slot';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import { faker } from '@faker-js/faker';
import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';

export const cmsCartContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'EmptyCartMiddleContent',
      [
        cmsParagraphComponent('RichTextExampleParagraph', 'CMS Content Text Paragraph', `<h2>Your shopping cart is empty</h2><p>Suggestions</p><ul><li>Browse our products by selecting a category above</li></ul>`),
        cmsFlexTypeComponent('ImportOrderEntriesComponent', 'Import Order Entries Component', 'ImportOrderEntriesComponent', faker.datatype.uuid()),
      ]
    ),
    contentSlot(
      'CenterLeftContentSlot',
      [
        cmsFlexTypeComponent('PromotionsComponent', 'Promotions Component', 'PromotionsComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('PotentialPromotionsComponent', 'Potential Promotions Component', 'PotentialPromotionsComponent', faker.datatype.uuid()),
      ]
    ),
    contentSlot(
      'CenterRightContentSlot',
      [
        cmsFlexTypeComponent('CartTotalsComponent', 'Cart Totals Display Component', 'CartTotalsComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('CartApplyCouponComponent', 'Cart Apply Coupon Component', 'CartApplyCouponComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('CartQuickOrderFormComponent', 'Cart Proceed To Checkout Component', 'CartQuickOrderFormComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('CartProceedToCheckoutComponent', 'Cart Quick Order Form Component', 'CartProceedToCheckoutComponent', faker.datatype.uuid()),
      ]
    ),
    contentSlot(
      'BottomContentSlot',
      [
        cmsFlexTypeComponent('CheckoutComponent', 'Checkout Display Component', 'CheckoutComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('CartSuggestions', 'Cart Suggestions', 'CartSuggestionComponent', faker.datatype.uuid(), {
          displayProductPrices: "true",
          productReferenceTypes: "ACCESSORIES SIMILAR",
          maximumNumberProducts: "20",
          displayProductTitles: "true",
          synchronizationBlocked: "false",
          filterPurchased: "true",
          title: "You may also like..."
        }),
      ]
    ),
    contentSlot(
      'TopContent',
      [
        cmsFlexTypeComponent('AddToSavedCartsComponent', 'Add To Saved Carts Component', 'AddToSavedCartsComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('CartComponent', 'Cart Display Component', 'CartComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('ClearCartComponent', 'Clear Cart Component', 'ClearCartComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('SaveForLaterComponent', 'SaveForLater Component', 'SaveForLaterComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('ImportExportOrderEntriesComponent', 'Import Export Order Entries Component', 'ImportExportOrderEntriesComponent', faker.datatype.uuid()),
      ]
    ),
  ];
};

