import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { CartUserType, getUserForCart } from '../commerce/cart';
import { createPaginationModel } from '../general';
import { createSortModel } from '../general';
import { createOrder, createOrderHistory } from './order';

export const getOrders = (additionalData?: Occ.OrderHistoryList): Occ.OrderHistoryList => {
  const amount = faker.number.int({ min: 1, max: 10 });

  return {
    orders: new Array(amount).fill(null).map(() => createOrderHistory()),
    pagination: createPaginationModel({
      sort: 'date',
      totalResults: amount,
    }),
    sorts: ['Date', 'Code', 'Status', 'Total'].map((code) => createSortModel({ code: code.toLowerCase(), name: code })),
    ...additionalData,
  };
};
