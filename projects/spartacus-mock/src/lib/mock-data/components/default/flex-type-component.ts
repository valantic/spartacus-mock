import { faker } from '@faker-js/faker';
import {CmsComponentAdditionalData, Component} from '../../../types';

export const flexTypeComponent = (typeCode: string, flexType?: string, additionalData?: CmsComponentAdditionalData): Component => {
  const component = {
    uid: `${typeCode}-${faker.datatype.uuid()}`,
    uuid: faker.datatype.uuid(),
    typeCode,
    modifiedtime: '2021-01-18T18:14:58.899Z',
    name: [typeCode, flexType].join('-'),
    container: 'false',
  };

  if (typeCode === 'CMSFlexComponent') {
    return {
      ...component,
      flexType,
    }
  }

  return {
    ...component,
    ...additionalData,
  }
}
