import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { PriceModifier } from '../../types';

export const createPrice = (additionalData?: Occ.Price, modifier?: PriceModifier): Occ.Price => {
  const value = modifier?.value || faker.datatype.number({ min: 1, max: 9999, precision: 0.05 });

  return {
    currencyIso: 'CHF',
    formattedValue: faker.commerce.price(value, value, 2, 'CHF'),
    maxQuantity: undefined,
    minQuantity: undefined,
    priceType: Occ.PriceType.BUY,
    value,
    ...additionalData,
  };
};

export const createPriceRange = (additionalData?: Occ.PriceRange): Occ.PriceRange => {
  const minPrice = faker.datatype.number({ min: 1, max: 999 });
  const maxPrice = faker.datatype.number({ min: minPrice, max: 9999 });

  return {
    minPrice: createPrice({
      value: minPrice,
      formattedValue: faker.commerce.price(minPrice, minPrice, 2, 'CHF'),
    }),
    maxPrice: createPrice({
      value: maxPrice,
      formattedValue: faker.commerce.price(maxPrice, maxPrice, 2, 'CHF'),
    }),
    ...additionalData,
  };
};
