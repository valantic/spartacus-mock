import { CustomComponent } from '../../types/types';
import { faker } from '@faker-js/faker';

export const flexType = (uid: string, name: string, typeCode: string, uuid?: string): CustomComponent => {
  return {
    uid,
    uuid: uuid ?? faker.datatype.uuid(),
    typeCode,
    modifiedtime: '2021-01-18T18:14:58.899Z',
    name,
    container: 'false',
  }
}
