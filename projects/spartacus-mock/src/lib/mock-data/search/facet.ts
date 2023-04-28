import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';
import { createSearchState } from './search';
import { FacetValueModifier } from '../../types';

export const createFacetValue = (additionalData?: Occ.FacetValue, modifier?: FacetValueModifier): Occ.FacetValue => {
  return {
    count: faker.datatype.number({ min: 1, max: 999 }),
    name: faker.commerce.productMaterial(),
    query: createSearchState(undefined, modifier ?? undefined),
    selected: false,
    ...additionalData,
  };
};

export const createFacet = (additionalData?: Occ.Facet, modifier?: FacetValueModifier): Occ.Facet => {
  return {
    category: false,
    multiSelect: false,
    name: faker.lorem.words(1),
    priority: 1,
    topValues: [],
    values: new Array(faker.datatype.number({ min: 3, max: 20 }))
      .fill(null)
      .map(() => createFacetValue(undefined, modifier)),
    visible: true,
    ...additionalData,
  };
};
