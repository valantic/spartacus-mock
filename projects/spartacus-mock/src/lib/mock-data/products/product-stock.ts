import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';

export const createProductStock = (additionalData?: Occ.Stock): Occ.Stock => {
  return {
    stockLevel: faker.datatype.number({ min: 0, max: 9999 }),
    stockLevelStatus: 'inStock',
    ...additionalData,
  };
};
