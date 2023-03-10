import { faker } from '@faker-js/faker';
import { ResponsiveMediaInput, media } from './media';
import { Component } from '../../../types';

export const simpleResponsiveBanner = (uid: string, name: string, urlLink: string, mediaInput: ResponsiveMediaInput): Component => {
  return {
    uid,
    uuid: faker.datatype.uuid(),
    typeCode: 'SimpleResponsiveBannerComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name,
    container: 'false',
    media: media(mediaInput),
    urlLink,
  };
};
