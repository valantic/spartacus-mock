import { faker } from '@faker-js/faker';
import { Occ, Price, PriceType } from '@spartacus/core';
import { LOCAL_STORAGE_KEY, LocalStorageMockData } from '../../types';
import { createAddress } from '../account/addresses';
import { createPaymentDetails, DEFAULT_PAYMENT_ID } from '../account/payments';
import { CartUserType, getUserForCart } from '../commerce/cart';
import { createDeliveryCost, createDeliveryMode } from '../commerce/delivery-mode';
import { createVoucher } from '../commerce/voucher';
import { createProduct } from '../products/product';
import { productPrice } from '../products/product-price';
import { createPromotionResult } from '../commerce/promotion';

// needed since Occ.Order seems to have these properties missing
interface OccOrderExtended extends Occ.Order {
  returnable?: boolean;
  cancellable?: boolean;
  placed?: Date;
  total?: Price;
}

// needed since Occ.OrderEntry seems to have these properties missing
export interface OccOrderEntryExtended extends Occ.OrderEntry {
  returnableQuantity?: number;
  cancellableQuantity?: number;
}

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

export const createOrderEntry = (
  entryNumber: number,
  productCode: string,
  maxPrice: number = 1000,
  returnable?: boolean,
  noReturnableQuantity?: boolean
): OccOrderEntryExtended => {
  const priceInclTax = maxPrice >= 1 ? faker.datatype.number({ min: 1, max: maxPrice, precision: 0.1 }) : 0;
  const priceExclTax = maxPrice >= 1 ? priceInclTax * 0.923 : 0;
  const quantity = faker.datatype.number({ min: 1, max: 20 });
  const returnableQuantity = noReturnableQuantity ? 0 : faker.datatype.number({ min: 0, max: quantity });

  return {
    entryNumber: entryNumber,
    quantity,
    basePrice: productPrice(priceExclTax, 'USD', PriceType.BUY),
    totalPrice: productPrice(priceInclTax, 'USD', PriceType.BUY),
    product: createProduct(),
    updateable: false,
    deliveryMode: createDeliveryMode('standard', 'Standard Delivery'),
    deliveryPointOfService: undefined,
    returnableQuantity,
  };
};

const createConsignmentEntry = (
  entryNumber: number,
  maxPrice: number = 1000,
  returnable?: boolean,
  noReturnableQuantity?: boolean
) => {
  const productCode = faker.datatype.number({ min: 100000, max: 999999 }).toString();
  return {
    orderEntry: createOrderEntry(entryNumber, productCode, maxPrice, returnable, noReturnableQuantity),
    quantity: 1,
  };
};

const createConsignment = (numEntries?: number) => {
  return {
    code: 'cons' + faker.datatype.uuid(),
    entries: new Array(numEntries || faker.datatype.number({ min: 1, max: 10 }))
      .fill(null)
      .map((_entry, index) => createConsignmentEntry(index + 1, 1000, index > 1, index === 1)),
    status: faker.helpers.arrayElement(orderStatusOptions),
    statusDate: faker.date.past(),
    statusDisplay: faker.helpers.arrayElement(orderStatusDisplayOptions),
    shippingAddress: createAddress(),
  };
};

export const createOrder = (
  cartUserType: CartUserType,
  code?: string,
  numEntries?: number,
  numVouchers?: number,
  freeOrder?: boolean
): OccOrderExtended => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;
  const totalItems = mockData.activeCartEntries.length || numEntries || faker.datatype.number({ min: 3, max: 10 });
  const productCode = faker.datatype.number({ min: 100000, max: 999999 }).toString();
  const genericEntries = new Array(totalItems)
    .fill(null)
    .map((_entry, index) => createOrderEntry(index + 1, productCode, freeOrder ? 0 : 1000, index > 1, index === 1));

  return {
    code: code || faker.datatype.number({ min: 100000, max: 999999 }).toString(),
    calculated: true,
    guid: faker.datatype.uuid(),
    entries: genericEntries,
    consignments: new Array(faker.datatype.number({ min: 1, max: 3 }))
      .fill(null)
      .map(() => createConsignment(faker.datatype.number({ min: 1, max: 5 }))),
    appliedOrderPromotions: new Array(numVouchers).fill(null).map(() => createPromotionResult()),
    appliedProductPromotions: new Array(numVouchers).fill(null).map(() => createPromotionResult()),
    appliedVouchers: new Array(numVouchers).fill(null).map(() => createVoucher(faker.datatype.string(10))),
    deliveryAddress: createAddress(),
    deliveryCost: createDeliveryCost(),
    deliveryItemsQuantity: 1,
    deliveryMode: createDeliveryMode('standard', 'Standard Delivery'),
    paymentInfo: createPaymentDetails({ defaultPayment: true, id: DEFAULT_PAYMENT_ID }),
    totalItems,
    totalDiscounts: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 100, precision: 0.1 }),
      'USD',
      PriceType.BUY
    ),
    subTotal: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 2000, precision: 0.1 }),
      'USD',
      PriceType.BUY
    ),
    totalPrice: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 2000, precision: 0.1 }),
      'USD',
      PriceType.BUY
    ),
    totalPriceWithTax: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 2000, precision: 0.1 }),
      'USD',
      PriceType.BUY
    ),
    totalTax: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 100, precision: 0.1 }),
      'USD',
      PriceType.BUY
    ),
    returnable: faker.datatype.boolean(),
    cancellable: false,
    user: getUserForCart(cartUserType),
    created: faker.date.past(),
    status: faker.helpers.arrayElement(orderStatusOptions),
    statusDisplay: faker.helpers.arrayElement(orderStatusDisplayOptions),
    placed: faker.date.past(),
    total: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 100, precision: 0.1 }),
      'USD',
      PriceType.BUY
    ),
  };
};
