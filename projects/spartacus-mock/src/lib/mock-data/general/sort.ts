import { Occ } from '@spartacus/core';

export const createSort = (additionalData?: Occ.Sort): Occ.Sort => {
  return {
    asc: true,
    code: 'name',
    ...additionalData,
  };
};
