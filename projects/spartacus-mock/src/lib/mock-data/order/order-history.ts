import { Occ } from '@spartacus/core';
import { CartUserType, getUserForCart } from '../commerce/cart';
import { createOrder } from './order';
import { faker } from '@faker-js/faker';
import { createPaginationModel } from '../general/pagination';
import { createSortModel } from '../general/sort';

export const getOrders = (additionalData?: Occ.OrderHistoryList): Occ.OrderHistoryList => {
  const amount = faker.datatype.number({ min: 1, max: 10 });

  return {
    orders: new Array(amount)
      .fill(null)
      .map(() => createOrder({ user: getUserForCart(CartUserType.OCC_USER_ID_CURRENT) })),
    pagination: createPaginationModel({
      sort: 'date',
      totalResults: amount,
    }),
    sorts: ['Date', 'Code', 'Status', 'Total'].map((code) => createSortModel({ code: code.toLowerCase(), name: code })),
    ...additionalData,
  };
};
