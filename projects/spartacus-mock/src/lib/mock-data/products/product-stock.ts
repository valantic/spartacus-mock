import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';

export const createProductStock = (additionalData?: Occ.Stock): Occ.Stock => {
  return {
    stockLevel: faker.datatype.number({ min: 1, max: 9999 }),
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
