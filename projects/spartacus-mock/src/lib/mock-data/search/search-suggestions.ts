import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const createSuggestion = (): Occ.Suggestion => {
  return {
    value: faker.commerce.productName(),
  };
};

export const suggestionList = (): Occ.SuggestionList => {
  return {
    suggestions: new Array(faker.datatype.number(10)).fill(null).map(() => createSuggestion()),
  };
};
