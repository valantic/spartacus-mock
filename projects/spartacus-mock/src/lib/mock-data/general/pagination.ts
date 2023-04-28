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
