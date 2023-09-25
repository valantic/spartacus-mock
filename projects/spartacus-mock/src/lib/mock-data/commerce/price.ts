import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { PriceModifier } from '../../types';

export const createPrice = (additionalData?: Occ.Price, modifier?: PriceModifier): Occ.Price => {
  const value = Number.isInteger(modifier?.value) ? modifier?.value : faker.number.int({ min: 1, max: 9999 });

  return {
    currencyIso: 'CHF',
    formattedValue: faker.commerce.price({ min: value, max: value, dec: 2, symbol: 'CHF' }),
    maxQuantity: undefined,
    minQuantity: undefined,
    priceType: Occ.PriceType.BUY,
    value,
    ...additionalData,
  };
};

export const createPriceRange = (additionalData?: Occ.PriceRange): Occ.PriceRange => {
  const minPrice = faker.number.int({ min: 1, max: 999 });
  const maxPrice = faker.number.int({ min: minPrice, max: 9999 });

  return {
    minPrice: createPrice({
      value: minPrice,
      formattedValue: faker.commerce.price({ min: minPrice, max: minPrice, dec: 2, symbol: 'CHF' }),
    }),
    maxPrice: createPrice({
      value: maxPrice,
      formattedValue: faker.commerce.price({ min: maxPrice, max: maxPrice, dec: 2, symbol: 'CHF' }),
    }),
    ...additionalData,
  };
};
