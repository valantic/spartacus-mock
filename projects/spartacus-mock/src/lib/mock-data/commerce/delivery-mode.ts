import { faker } from '@faker-js/faker';
import { DeliveryMode } from '@spartacus/cart/base/root';
import { getPriceWithDecimals } from './cart';
import { PriceType } from '@spartacus/core';

export const createDeliveryCost = () => {
  const price = faker.commerce.price(100, 10000, 0, '');
  const priceNumber = getPriceWithDecimals(price);

  return {
    currencyIso: 'USD',
    formattedValue: `$${priceNumber}`,
    priceType: PriceType.BUY,
    value: priceNumber,
  };
};

export const createDeliveryMode = (code: string, name: string): DeliveryMode => {
  return {
    code,
    name,
    description: faker.lorem.sentences(1),
    deliveryCost: createDeliveryCost(),
  };
};
