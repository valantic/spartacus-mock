import { contentSlot } from '../components/default/content-slot';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import { faker } from '@faker-js/faker';
import { ContentSlot } from '../../types';

export const cmsCartContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3Slot-ContentPage',
      'Section3',
      'Section3 Slot for Content Page',
      [
        cmsFlexTypeComponent('empty_cart_component', 'EmptyCartComponent', 'ValanticEmptyCartComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('cart_component', 'CartComponent', 'CartComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('cart_apply_coupon_component', 'CartApplyCouponComponent', 'CartApplyCouponComponent', faker.datatype.uuid()),
        cmsFlexTypeComponent('cart_totals_component', 'CartTotalsComponent', 'CartTotalsComponent', faker.datatype.uuid()),
      ]
    ),
  ];
};
