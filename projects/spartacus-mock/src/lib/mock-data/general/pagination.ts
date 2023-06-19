import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const createPagination = (additionalData?: Occ.Pagination): Occ.Pagination => {
  return {
    count: 10,
    page: 1,
    totalCount: 10,
    totalPages: 1,
    ...additionalData,
  };
};

export const createPaginationModel = (additionalData?: Occ.PaginationModel): Occ.PaginationModel => {
  const totalResults = faker.datatype.number({ min: 1, max: 999 });
  const pageSize = 12;

  return {
    currentPage: 1,
    pageSize,
    sort: '',
    totalPages: totalResults / pageSize + 1,
    totalResults,
    ...additionalData,
  };
};
