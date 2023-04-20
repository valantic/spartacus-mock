import { faker } from '@faker-js/faker';

export const searchSuggestions = (_query: string, max: number) => {
  return {
    suggestions: new Array(faker.datatype.number(max)).fill(null).map(() => ({
      value: faker.lorem.word(),
    })),
  };
};
