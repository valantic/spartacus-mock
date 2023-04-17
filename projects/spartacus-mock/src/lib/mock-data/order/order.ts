import { faker } from '@faker-js/faker';
import { OrderEntry } from '@spartacus/cart/base/root';
import { PriceType, Product } from '@spartacus/core';
import { createPromotion } from '../commerce/promotion';
import { createVoucher } from '../commerce/voucher';
import { product } from '../products/product';
import { productPrice } from '../products/product-price';
import { createAddress } from '../account/addresses';
import { createDeliveryCost, createDeliveryMode } from '../commerce/delivery-mode';
import { getDefaultPayment } from '../account/payments';

export const createOrderEntry = (
  entryNumber: number,
  maxPrice: number = 1000,
  returnable?: boolean,
  noReturnableQuantity?: boolean
): OrderEntry => {
  const priceInclTax = maxPrice >= 1 ? faker.datatype.number({ min: 1, max: maxPrice, precision: 0.1 }) : 0;
  const priceExclTax = maxPrice >= 1 ? priceInclTax * 0.923 : 0;
  const quantity = faker.datatype.number({ min: 1, max: 20 });
  const returnableQuantity = noReturnableQuantity ? 0 : faker.datatype.number({ min: 0, max: quantity });

  return {
    entryNumber: entryNumber,
    quantity,
    basePrice: productPrice(priceExclTax, 'CHF', PriceType.BUY),
    totalPrice: productPrice(priceInclTax, 'CHF', PriceType.BUY),
    product: product(faker.datatype.number({ min: 100000, max: 999999 }).toString()) as Product,
    updateable: false,
    deliveryMode: createDeliveryMode('standard', 'Standard Delivery'),
    deliveryPointOfService: undefined,
    cancelledItemsPrice: undefined,
    cancellableQuantity: undefined,
    returnedItemsPrice: undefined,
    returnableQuantity,
  };
};

export const createOrder = (code?: string, numEntries?: number, numVouchers?: number, freeOrder?: boolean): any => {
  const totalItems = numEntries || faker.datatype.number({ min: 3, max: 10 });

  return {
    code: code || faker.datatype.number({ min: 100000, max: 999999 }).toString(),
    calculated: true,
    guid: faker.datatype.uuid(),
    entries: new Array(totalItems)
      .fill(null)
      .map((_entry, index) => createOrderEntry(index + 1, freeOrder ? 0 : 1000, index > 1, index === 1)),
    appliedOrderPromotions: new Array(numVouchers).fill(null).map(() => createPromotion(faker.datatype.string(10))),
    appliedProductPromotions: new Array(numVouchers).fill(null).map(() => createPromotion(faker.datatype.string(10))),
    appliedVouchers: new Array(numVouchers).fill(null).map(() => createVoucher(faker.datatype.string(10))),
    deliveryAddress: createAddress(),
    deliveryCost: createDeliveryCost(),
    deliveryItemsQuantity: 1,
    deliveryMode: createDeliveryMode('standard', 'Standard Delivery'),
    paymentInfo: getDefaultPayment(),
    totalItems,
    totalDiscounts: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 100, precision: 0.1 }),
      'CHF',
      PriceType.BUY
    ),
    subTotal: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 2000, precision: 0.1 }),
      'CHF',
      PriceType.BUY
    ),
    totalPrice: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 2000, precision: 0.1 }),
      'CHF',
      PriceType.BUY
    ),
    totalPriceWithTax: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 2000, precision: 0.1 }),
      'CHF',
      PriceType.BUY
    ),
    totalTax: productPrice(
      freeOrder ? 0 : faker.datatype.number({ min: 10, max: 100, precision: 0.1 }),
      'CHF',
      PriceType.BUY
    ),
    totalTaxValues: [
      {
        appliedValue: 12.07,
        value: 7.7,
      },
    ],
    returnable: faker.datatype.boolean(),
    cancellable: false,
    user: {
      uid: faker.internet.email(),
    },
  };
};
