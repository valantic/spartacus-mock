import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { product } from './product';

export const productReferences = (
  referenceType: string,
  imageStartIndex: number,
  numberOfProducts?: number
): Occ.ProductReferenceList => {
  const productsCount = numberOfProducts ?? faker.datatype.number({ min: 1, max: 30 });

  const referencesList = [];

  for (let index = 1; index <= productsCount; index++) {
    referencesList.push({
      quantity: faker.datatype.number(10),
      referenceType: referenceType,
      target: product(faker.datatype.uuid(), imageStartIndex + index),
    } as Occ.ProductReference);
  }

  return {
    references: referencesList,
  };
};
