import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const flexType = (uid: string, name: string, typeCode: string, uuid?: string): Component => {
  return {
    uid,
    uuid: uuid ?? faker.datatype.uuid(),
    typeCode,
    modifiedtime: '2021-01-18T18:14:58.899Z',
    name,
    container: 'false',
  }
}
