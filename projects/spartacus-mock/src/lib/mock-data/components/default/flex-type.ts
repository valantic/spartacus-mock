import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const flexType = (typeCode: string, name?: string, uid?: string, uuid?: string): Component => {
  return {
    uid: uid ?? `${typeCode}-${faker.datatype.uuid()}`,
    uuid: uuid ?? faker.datatype.uuid(),
    typeCode,
    modifiedtime: '2021-01-18T18:14:58.899Z',
    name: name ?? typeCode,
    container: 'false',
  }
}
