import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const createProductCategory = (additionalData?: Occ.Category): Occ.Category => {
  return {
    code: faker.string.uuid(),
    name: faker.commerce.department(),
    image: undefined,
    url: faker.internet.url(),
    ...additionalData,
  };
};
