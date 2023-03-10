import { faker } from '@faker-js/faker';
import { Component } from '../../../types';


export const searchBoxComponent = (): Component => {
  return {
    uid: `SearchBoxComponent-${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    typeCode: 'SearchBoxComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name: `${faker.lorem.words(2)} Search Box Component`,
    container: 'false',
    maxSuggestions: '5',
    maxProducts: '5',
    displaySuggestions: 'true',
    displayProducts: 'true',
    displayProductImages: 'true',
    waitTimeBeforeRequest: '0',
    minCharactersBeforeRequest: '0'
  };
};
