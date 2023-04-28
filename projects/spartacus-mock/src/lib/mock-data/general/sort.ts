import { Occ, SortModel } from '@spartacus/core';

export const createSort = (additionalData?: Occ.Sort): Occ.Sort => {
  return {
    asc: true,
    code: 'name',
    ...additionalData,
  };
};

export const createSortModel = (additionalData?: SortModel): Occ.SortModel => {
  return {
    code: 'name',
    name: 'Name',
    selected: false,
    ...additionalData,
  };
};
