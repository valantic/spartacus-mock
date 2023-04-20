import { SortModel } from '@spartacus/core';
import { OrderHistoryList } from '@spartacus/order/root';
import { createOrder } from './order';

export const getOrders = (amount: number = 5): OrderHistoryList => {
  return {
    orders: new Array(amount).fill(null).map(() => createOrder()),
    pagination: {
      currentPage: 1,
      pageSize: 999,
      sort: 'date',
      totalPages: 1,
      totalResults: amount,
    },
    sorts: getSorts(),
  };
};

const getSorts = (selected?: string): SortModel[] => {
  return ['Date', 'Code', 'Status', 'Total'].map((code) => ({
    code: code.toLowerCase(),
    name: code,
    selected: code === selected,
  }));
};