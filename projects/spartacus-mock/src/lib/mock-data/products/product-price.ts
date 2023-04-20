import { Price, PriceType } from '@spartacus/core';
import { faker } from '@faker-js/faker';

export const productPrice = (price?: number, currency?: string, priceType: PriceType = PriceType.FROM): Price => {
  const priceValue = price || faker.datatype.number(9999);
  const currencyValue = currency || 'USD';

  return {
    currencyIso: currency,
    formattedValue: faker.commerce.price(priceValue, priceValue, 2, `${currencyValue} `),
    maxQuantity: undefined,
    minQuantity: undefined,
    priceType,
    value: priceValue,
  };
};
