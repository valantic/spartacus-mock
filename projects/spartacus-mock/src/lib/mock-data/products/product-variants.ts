import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';

export const productVariants = (): Occ.Product => {
  return {
    baseOptions: [],
    name: faker.commerce.productName(),
    purchasable: true,
  };
};
