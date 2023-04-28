import { Occ } from '@spartacus/core';
import { createSort } from '../general/sort';
import { createPagination } from '../general/pagination';
import { faker } from '@faker-js/faker';

export const createCustomerCoupon = (additionalData?: Occ.CustomerCoupon): Occ.CustomerCoupon => {
  return {
    couponId: faker.random.numeric(6),
    name: 'Free Delivery Coupon',
    startDate: faker.date.past().toDateString(),
    endDate: faker.date.future().toDateString(),
    status: 'Effective',
    description: faker.lorem.sentences(2),
    notificationOn: false,
    allProductsApplicable: true,
    ...additionalData,
  };
};

export const customerCouponSearchResult = (
  additionalData?: Occ.CustomerCouponSearchResult
): Occ.CustomerCouponSearchResult => {
  return {
    coupons: [createCustomerCoupon()],
    pagination: createPagination(),
    sorts: [
      createSort({
        code: 'startdata',
      }),
    ],
    ...additionalData,
  };
};
