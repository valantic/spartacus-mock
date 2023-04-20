import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { cmsParagraphComponent } from '../components/default/cms-paragraph';
import { flexTypeComponent } from '../components/default/flex-type-component';

export const cmsCartContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('EmptyCartMiddleContent', [
      cmsParagraphComponent(
        `<h2>Your shopping cart is empty</h2><p>Suggestions</p><ul><li>Browse our products by selecting a category above</li></ul>`
      ),
      flexTypeComponent('ImportOrderEntriesComponent'),
    ]),
    contentSlot('CenterLeftContentSlot', [
      flexTypeComponent('PromotionsComponent'),
      flexTypeComponent('PotentialPromotionsComponent'),
    ]),
    contentSlot('CenterRightContentSlot', [
      flexTypeComponent('CartTotalsComponent'),
      flexTypeComponent('CartApplyCouponComponent'),
      flexTypeComponent('CartQuickOrderFormComponent'),
      flexTypeComponent('CartProceedToCheckoutComponent'),
    ]),
    contentSlot('BottomContentSlot', [
      flexTypeComponent('CheckoutComponent'),
      flexTypeComponent('CartSuggestions', undefined, {
        displayProductPrices: 'true',
        productReferenceTypes: 'ACCESSORIES SIMILAR',
        maximumNumberProducts: '20',
        displayProductTitles: 'true',
        synchronizationBlocked: 'false',
        filterPurchased: 'true',
        title: 'You may also like...',
      }),
    ]),
    contentSlot('TopContent', [
      flexTypeComponent('AddToSavedCartsComponent'),
      flexTypeComponent('CartComponent'),
      flexTypeComponent('ClearCartComponent'),
      flexTypeComponent('SaveForLaterComponent'),
      flexTypeComponent('ImportExportOrderEntriesComponent'),
    ]),
  ];
};
