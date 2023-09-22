import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createSearchState } from './search';

export const createBreadcrumb = (additionalData?: Occ.Breadcrumb): Occ.Breadcrumb => {
  return {
    facetCode: faker.string.uuid(),
    facetName: faker.commerce.department(),
    facetValueCode: faker.string.uuid(),
    facetValueName: `${faker.string.numeric(3)} ${faker.science.unit()}`,
    removeQuery: createSearchState(),
    truncateQuery: createSearchState(),
    ...additionalData,
  };
};
