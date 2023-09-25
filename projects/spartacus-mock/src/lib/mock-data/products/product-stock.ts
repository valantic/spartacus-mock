import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const createProductStock = (additionalData?: Occ.Stock): Occ.Stock => {
  return {
    stockLevel: faker.number.int({ min: 1, max: 9999 }),
    stockLevelStatus: 'inStock',
    ...additionalData,
  };
};

export const createFutureStock = (additionalData?: Occ.FutureStock): Occ.FutureStock => {
  const date = faker.date.future();

  return {
    date,
    formattedDate: date.toDateString(),
    stock: createProductStock(),
    ...additionalData,
  };
};
