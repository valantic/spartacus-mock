import { Component } from '../../../types';

export const siteContextComponent = (uid: string, uuid: string, name: string, context: string): Component => {
  return {
    uid,
    uuid,
    typeCode: 'CMSSiteContextComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name,
    container: 'false',
    context,
  };
};
