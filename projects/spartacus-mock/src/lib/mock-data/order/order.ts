import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { LOCAL_STORAGE_KEY, LocalStorageMockData } from '../../types';
import { createAddress } from '../account';
import { DEFAULT_PAYMENT_ID, createPaymentDetails } from '../account';
import { createDeliveryMode } from '../commerce';
import { createVoucher } from '../commerce';
import { createPromotionResult } from '../commerce';
import { createPrice } from '../commerce';
import { CartUserType, getUserForCart } from '../commerce/cart';
import { createFullProduct } from '../products/product';

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

export const createOrder = (additionalData?: Occ.Order): Occ.Order => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  const totalItems = mockData.activeCartEntries.length || faker.datatype.number({ min: 3, max: 10 });
  const genericEntries = new Array(totalItems).fill(null).map((_entry, index) => createOrderEntry());

  return {
    code: faker.random.numeric(6),
    calculated: true,
    guid: faker.datatype.uuid(),
    entries: genericEntries,
    consignments: new Array(faker.datatype.number({ min: 1, max: 3 })).fill(null).map(() => createConsignment()),
    appliedOrderPromotions: new Array(faker.datatype.number({ min: 0, max: 3 }))
      .fill(null)
      .map(() => createPromotionResult()),
    appliedProductPromotions: new Array(faker.datatype.number({ min: 0, max: 3 }))
      .fill(null)
      .map(() => createPromotionResult()),
    appliedVouchers: new Array(faker.datatype.number({ min: 0, max: 3 })).fill(null).map(() => createVoucher()),
    deliveryAddress: createAddress(),
    deliveryCost: createPrice(),
    deliveryItemsQuantity: 1,
    deliveryMode: createDeliveryMode({ code: 'standard', name: 'Standard Delivery' }),
    paymentInfo: createPaymentDetails({ defaultPayment: true, id: DEFAULT_PAYMENT_ID }),
    totalItems,
    totalDiscounts: createPrice(),
    subTotal: createPrice(),
    totalPrice: createPrice(),
    totalPriceWithTax: createPrice(),
    totalTax: createPrice(),
    user: getUserForCart(),
    created: faker.date.past(),
    status: faker.helpers.arrayElement(orderStatusOptions),
    statusDisplay: faker.helpers.arrayElement(orderStatusDisplayOptions),
    ...additionalData,
  };
};
