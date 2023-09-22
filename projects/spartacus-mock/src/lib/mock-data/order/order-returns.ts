import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { ReturnRequest, ReturnRequestList } from '@spartacus/order/root';
import { createPrice } from '../commerce';
import { CartUserType, getUserForCart } from '../commerce/cart';
import { createFullProduct } from '../products';
import { createOrder, createOrderEntry } from './order';

const createReturnRequestEntry = (entryNumber: number): Occ.ReturnRequestEntry => {
  const productCode = faker.string.numeric(6);
  return {
    orderEntry: createOrderEntry({ entryNumber, product: createFullProduct({ code: productCode }), quantity: 500 }),
    expectedQuantity: 1,
    refundAmount: createPrice(),
  };
};

export const getOrderReturn = (numEntries?: number, orderId?: string): Occ.ReturnRequest => {
  const returnEntriesAmount = numEntries || faker.number.int({ min: 1, max: 10 });

  return {
    code: `RMA-${faker.string.numeric(6)}`,
    cancellable: false,
    creationTime: faker.date.past(),
    order: createOrder({ user: getUserForCart(CartUserType.OCC_USER_ID_CURRENT), code: orderId }),
    refundDeliveryCost: false,
    returnEntries: new Array(returnEntriesAmount).fill(null).map((_, index) => createReturnRequestEntry(index)),
    returnLabelDownloadUrl: '/download-url',
    rma: faker.string.numeric(6),
    deliveryCost: createPrice(),
    subTotal: createPrice(),
    totalPrice: createPrice(),
  };
};

export const getReturnRequestList = (numEntries?: number, orderId?: string): ReturnRequestList => {
  const listItemsAmount = numEntries ?? faker.number.int({ min: 1, max: 20 });

  return {
    returnRequests: new Array(listItemsAmount)
      .fill(null)
      .map(() => getOrderReturn(faker.number.int({ min: 1, max: 10 }), orderId)) as ReturnRequest[],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: listItemsAmount,
      totalResults: listItemsAmount,
    },
  };
};
