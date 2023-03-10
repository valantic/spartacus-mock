import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';

const NUMBER_OF_CATEGORIES = 3;

export const productCategories = (): Occ.Category[] => {
  const categories = [];
  const categoryName = faker.lorem.words(2);

  for (let i = 0; i < NUMBER_OF_CATEGORIES; i++) {
    categories.push({
      code: faker.datatype.number(999).toString(),
      name: faker.lorem.words(2),
      url: `/mock/category/${categoryName.replace(' ', '-')}/c/${categoryName}`
    });
  }

  return categories;
};
