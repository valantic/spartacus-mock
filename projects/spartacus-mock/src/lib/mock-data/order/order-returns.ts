import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { ReturnRequest, ReturnRequestList } from '@spartacus/order/root';
import { CartUserType } from '../commerce/cart';
import { createOrder, createOrderEntry } from './order';
import { createPrice } from '../commerce/price';
import { createFullProduct } from '../products/product';

const createReturnRequestEntry = (entryNumber: number): Occ.ReturnRequestEntry => {
  const productCode = faker.datatype.number({ min: 100000, max: 999999 }).toString();
  return {
    orderEntry: createOrderEntry({ entryNumber, product: createFullProduct({ code: productCode }), quantity: 500 }),
    expectedQuantity: 1,
    refundAmount: createPrice(),
  };
};

// const returnRequestStatusOptions = Object.keys(ReturnRequestStatusMap);

export const getOrderReturn = (numEntries?: number, orderId?: string): Occ.ReturnRequest => {
  const returnEntriesAmount = numEntries || faker.datatype.number({ min: 1, max: 10 });

  return {
    code: `RMA-${faker.datatype.number({ min: 100000, max: 999999 })}`,
    cancellable: false,
    creationTime: faker.date.past(),
    order: createOrder(CartUserType.OCC_USER_ID_CURRENT, orderId),
    refundDeliveryCost: false,
    returnEntries: new Array(returnEntriesAmount).fill(null).map((_, index) => createReturnRequestEntry(index)),
    returnLabelDownloadUrl: '/download-url',
    rma: faker.datatype.number({ min: 100000, max: 999999 }).toString(),
    // status: faker.helpers.arrayElement(returnRequestStatusOptions),
    deliveryCost: createPrice(),
    subTotal: createPrice(),
    totalPrice: createPrice(),
  };
};

export const getReturnRequestList = (numEntries?: number, orderId?: string): ReturnRequestList => {
  const listItemsAmount = numEntries ?? faker.datatype.number({ min: 1, max: 20 });

  return {
    returnRequests: new Array(listItemsAmount)
      .fill(null)
      .map(() => getOrderReturn(faker.datatype.number({ min: 1, max: 10 }), orderId)) as ReturnRequest[],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: listItemsAmount,
      totalResults: listItemsAmount,
    },
  };
};
