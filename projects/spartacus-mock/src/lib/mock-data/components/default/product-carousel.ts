import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const productCarousel = (uid: string, name: string, productCodes: string, title: string): Component => {
  return {
    uid,
    uuid: faker.datatype.uuid(),
    typeCode: 'ProductCarouselComponent',
    modifiedtime: '2021-01-18T18:14:58.899Z',
    name,
    container: 'false',
    popup: 'false',
    scroll: 'ALLVISIBLE',
    productCodes,
    title
  };
};
