import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const simpleBannerComponent = (urlLink: string): Component => {
  return {
    uid: `SimpleBannerComponent-${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    typeCode: 'SimpleBannerComponent',
    modifiedtime: '2021-01-18T18:14:57.663Z',
    name: `${faker.lorem.words(2)} Banner Component`,
    container: 'false',
    external: 'false',
    media: {
      code: 'Simple_Banner_Media',
      mime: 'image/png',
      altText: 'SAP Commerce',
      url: `https://picsum.photos/360/240.webp?random=${Math.round(Math.random() * 1000)}`
    },
    urlLink,
  };
};
