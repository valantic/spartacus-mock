import { CmsComponentAdditionalData, Component } from '../../../types';

export const cmsFlexTypeComponent = (uid: string, name: string, flexType: string, uuid: string, additionalData?: CmsComponentAdditionalData): Component => {
  return {
    uid,
    uuid,
    typeCode: 'CMSFlexComponent',
    modifiedtime: '2021-01-18T18:14:58.899Z',
    name,
    container: 'false',
    flexType,
    ...additionalData,
  };
};
