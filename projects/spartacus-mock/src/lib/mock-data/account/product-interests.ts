import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';
import { createPagination } from '../general/pagination';
import { createSort } from '../general/sort';
import { createProduct } from '../products/product';

export const createProductInterestEntry = (additionalData?: Occ.ProductInterestEntry): Occ.ProductInterestEntry => {
  return {
    interestType: Occ.NotificationType.BACK_IN_STOCK,
    dateAdded: faker.date.past().toDateString(),
    expirationDate: faker.date.future().toDateString(),
    ...additionalData,
  };
};

export const createProductInterestEntryRelation = (
  additionalData?: Occ.ProductInterestEntryRelation
): Occ.ProductInterestEntryRelation => {
  return {
    product: createProduct(),
    productInterestEntry: [createProductInterestEntry()],
    ...additionalData,
  };
};

export const productInterestSearchResult = (
  additionalData?: Occ.ProductInterestSearchResult
): Occ.ProductInterestSearchResult => {
  return {
    pagination: createPagination(),
    results: [createProductInterestEntryRelation()],
    sorts: [createSort()],
    ...additionalData,
  };
};
