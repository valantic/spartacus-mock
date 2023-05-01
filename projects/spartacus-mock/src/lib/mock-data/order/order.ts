import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { LOCAL_STORAGE_KEY, LocalStorageMockData } from '../../types';
import { createAddress } from '../account/addresses';
import { createPaymentDetails, DEFAULT_PAYMENT_ID } from '../account/payments';
import { CartUserType, getUserForCart } from '../commerce/cart';
import { createDeliveryMode } from '../commerce/delivery-mode';
import { createVoucher } from '../commerce/voucher';
import { createFullProduct } from '../products/product';
import { createPromotionResult } from '../commerce/promotion';
import { createPrice } from '../commerce/price';

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

export const createOrderEntry = (additionalData?: Occ.OrderEntry): Occ.OrderEntry => {
  return {
    basePrice: createPrice(),
    deliveryMode: createDeliveryMode({ code: 'standard', name: 'Standard Delivery' }),
    deliveryPointOfService: undefined,
    entryNumber: faker.datatype.number({ min: 100000, max: 999999 }),
    product: createFullProduct(),
    quantity: faker.datatype.number({ min: 1, max: 20 }),
    totalPrice: createPrice(),
    updateable: false,
    statusSummaryList: [],
    configurationInfos: [],
    ...additionalData,
  };
};

export const createConsignmentEntry = (additionalData?: Occ.ConsignmentEntry): Occ.ConsignmentEntry => {
  return {
    orderEntry: createOrderEntry(),
    quantity: 1,
    ...additionalData,
  };
};

export const createConsignment = (additionalData?: Occ.Consignment): Occ.Consignment => {
  return {
    code: 'cons' + faker.datatype.uuid(),
    deliveryPointOfService: undefined,
    entries: new Array(faker.datatype.number({ min: 1, max: 10 }))
      .fill(null)
      .map((_entry, index) => createConsignmentEntry()),
    shippingAddress: createAddress(),
    status: faker.helpers.arrayElement(orderStatusOptions),
    statusDate: faker.date.past(),
    trackingID: faker.random.numeric(10),
    ...additionalData,
  };
};

export const createOrder = (
  cartUserType: CartUserType,
  code?: string,
  numEntries?: number,
  numVouchers?: number,
  freeOrder?: boolean
): Occ.Order => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;
  const totalItems = mockData.activeCartEntries.length || numEntries || faker.datatype.number({ min: 3, max: 10 });
  const genericEntries = new Array(totalItems).fill(null).map((_entry, index) => createOrderEntry());

  return {
    code: code || faker.datatype.number({ min: 100000, max: 999999 }).toString(),
    calculated: true,
    guid: faker.datatype.uuid(),
    entries: genericEntries,
    consignments: new Array(faker.datatype.number({ min: 1, max: 3 })).fill(null).map(() => createConsignment()),
    appliedOrderPromotions: new Array(numVouchers).fill(null).map(() => createPromotionResult()),
    appliedProductPromotions: new Array(numVouchers).fill(null).map(() => createPromotionResult()),
    appliedVouchers: new Array(numVouchers).fill(null).map(() => createVoucher()),
    deliveryAddress: createAddress(),
    deliveryCost: createPrice(),
    deliveryItemsQuantity: 1,
    deliveryMode: createDeliveryMode({ code: 'standard', name: 'Standard Delivery' }),
    paymentInfo: createPaymentDetails({ defaultPayment: true, id: DEFAULT_PAYMENT_ID }),
    totalItems,
    totalDiscounts: createPrice(undefined, { value: freeOrder ? 0 : undefined }),
    subTotal: createPrice(undefined, { value: freeOrder ? 0 : undefined }),
    totalPrice: createPrice(undefined, { value: freeOrder ? 0 : undefined }),
    totalPriceWithTax: createPrice(undefined, { value: freeOrder ? 0 : undefined }),
    totalTax: createPrice(undefined, { value: freeOrder ? 0 : undefined }),
    user: getUserForCart(cartUserType),
    created: faker.date.past(),
    status: faker.helpers.arrayElement(orderStatusOptions),
    statusDisplay: faker.helpers.arrayElement(orderStatusDisplayOptions),
  };
};
