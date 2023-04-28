import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createBaseProduct } from './product';
import { ProductReferenceListModifier } from '../../types';

export const createProductReference = (additionalData?: Occ.ProductReference): Occ.ProductReference => {
  return {
    description: faker.commerce.productDescription(),
    preselected: false,
    quantity: faker.datatype.number({ min: 1, max: 99 }),
    referenceType: 'ACCESSORIES',
    target: createBaseProduct(),
    ...additionalData,
  };
};

export const productReferenceList = (modifier?: ProductReferenceListModifier): Occ.ProductReferenceList => {
  return {
    references: [
      createProductReference({ referenceType: modifier?.referenceType || 'ACCESSORIES' }),
      createProductReference({ referenceType: modifier?.referenceType || 'ACCESSORIES' }),
      createProductReference({ referenceType: modifier?.referenceType || 'ACCESSORIES' }),
    ],
  };
};
