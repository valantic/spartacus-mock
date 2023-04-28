import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';
import { createPrice } from '../commerce/price';
import { createProductStock } from './product-stock';

export const createVariantOptionQualifier = (): Occ.VariantOptionQualifier => {
  return {
    image: undefined,
    name: `${faker.commerce.productName()} - ${faker.commerce.productMaterial()}`,
    qualifier: faker.commerce.productMaterial(),
    value: faker.commerce.productMaterial(),
  };
};

export const createVariantOption = (additionalData?: Occ.VariantOption): Occ.VariantOption => {
  return {
    code: `VAR_${faker.datatype.number({ min: 100000, max: 999999 })}`,
    priceData: createPrice(),
    stock: createProductStock(),
    url: faker.internet.url(),
    variantOptionQualifiers: [
      createVariantOptionQualifier(),
      createVariantOptionQualifier(),
      createVariantOptionQualifier(),
    ],
    ...additionalData,
  };
};

export const createBaseOption = (additionalData?: Occ.BaseOption): Occ.BaseOption => {
  return {
    options: [createVariantOption()],
    selected: createVariantOption(),
    variantType: '',
    ...additionalData,
  };
};
