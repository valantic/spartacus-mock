import { faker } from '@faker-js/faker';
import { ReturnRequest, ReturnRequestEntry, ReturnRequestList } from '@spartacus/order/root';
import { productPrice } from '../products/product-price';
import { createOrder, createOrderEntry } from './order';
// import { ReturnReasons, ReturnRequestStatusMap } from '@models/order';

const createReturnRequestEntry = (entryNumber: number): ReturnRequestEntry => {
  return {
    orderEntry: createOrderEntry(entryNumber, 500),
    expectedQuantity: 1,
    refundAmount: productPrice(faker.datatype.number({ min: 10, max: 500 })),
  };
};

// const returnRequestStatusOptions = Object.keys(ReturnRequestStatusMap);

export const getOrderReturn = (numEntries?: number, orderId?: string): ReturnRequest => {
  const returnEntriesAmount = numEntries || faker.datatype.number({ min: 1, max: 10 });

  return {
    code: `RMA-${faker.datatype.number({ min: 100000, max: 999999 })}`,
    cancellable: false,
    creationTime: faker.date.past(),
    order: createOrder(orderId),
    refundDeliveryCost: false,
    returnEntries: new Array(returnEntriesAmount).fill(null).map((_, index) => createReturnRequestEntry(index)),
    returnLabelDownloadUrl: '/download-url',
    rma: faker.datatype.number({ min: 100000, max: 999999 }).toString(),
    // status: faker.helpers.arrayElement(returnRequestStatusOptions),
    deliveryCost: productPrice(faker.datatype.number({ min: 0, max: 50 })),
    subTotal: productPrice(faker.datatype.number({ min: 50, max: 4000 })),
    totalPrice: productPrice(faker.datatype.number({ min: 50, max: 4000 })),
  };
};

export const getReturnRequestList = (numEntries?: number, orderId?: string): ReturnRequestList => {
  const listItemsAmount = numEntries ?? faker.datatype.number({ min: 1, max: 20 });

  return {
    returnRequests: new Array(listItemsAmount)
      .fill(null)
      .map(() => getOrderReturn(faker.datatype.number({ min: 1, max: 10 }), orderId)),
    pagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: listItemsAmount,
      totalResults: listItemsAmount,
    },
  };
};
