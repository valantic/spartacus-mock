import { faker } from '@faker-js/faker';
import { Price, PriceType } from '@spartacus/core';
import { OrderHistoryList } from '@spartacus/order/root';

const orderStatusDisplayOptions = [
  'cancelled',
  'cancelling',
  'completed',
  'created',
  'error',
  'processing',
  'open',
  'approved',
];

const orderStatusOptions = [
  'IN_TRANSIT',
  'READY_FOR_PICKUP',
  'READY_FOR_SHIPPING',
  'WAITING',
  'DELIVERING',
  'PICKPACK',
  'PICKUP_COMPLETE',
  'DELIVERY_COMPLETED',
  'PAYMENT_NOT_CAPTURED',
  'READY',
  'DELIVERY_REJECTED',
  'DELIVERY_REJECTED',
  'SHIPPED',
  'TAX_NOT_COMMITTED',
  'CANCELLED',
];

const createPrice = (): Price => {
  const value = faker.datatype.number({ min: 10, max: 999 });

  return {
    currencyIso: 'CHF',
    formattedValue: `${value.toFixed(2)} CHF`,
    priceType: PriceType.BUY,
    value,
  };
};

const createOrder = (): any => {
  return {
    code: `O-${faker.datatype.number({ min: 100000, max: 999999 })}`,
    guid: faker.datatype.uuid(),
    placed: faker.date.past(),
    status: faker.helpers.arrayElement(orderStatusOptions),
    statusDisplay: faker.helpers.arrayElement(orderStatusDisplayOptions),
    total: createPrice(),
    shippedToName: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
    returnable: faker.datatype.boolean(),
  };
};

export const getOrders = (amount: number = 5): OrderHistoryList => {
  return {
    orders: new Array(amount).fill(null).map(() => createOrder()),
    pagination: {
      currentPage: 1,
      pageSize: 999,
      sort: '',
      totalPages: 1,
      totalResults: amount,
    },
    sorts: [],
  };
};
