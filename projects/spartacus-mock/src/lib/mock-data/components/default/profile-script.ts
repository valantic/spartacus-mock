import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const profileScriptComponent = (): Component => {
  return {
    uid: `ProfileTagScriptComponent-${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    typeCode: 'ProfileTagScriptComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name: `${faker.lorem.words(2)} Profile Tag Component`,
    container: 'false',
  };
};
