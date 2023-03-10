import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const productReferencesComponent = (uid: string, name: string, referenceType: string, title: string): Component => {
  return {
    uid,
    uuid: faker.datatype.uuid(),
    typeCode: 'ProductReferencesComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name,
    container: 'false',
    productReferenceTypes: referenceType,
    displayProductPrices: 'true',
    maximumNumberProducts: '5',
    displayProductTitles: 'true',
    title
  };
};
