import { faker } from '@faker-js/faker';
import { Component } from '../../../types';

export const miniCartComponent = (): Component => {
  return {
    uid: `mini-cart-component-${faker.datatype.number(1000)}`,
    uuid: faker.datatype.uuid(),
    typeCode: 'MiniCartComponent',
    modifiedtime: '2021-01-18T18:15:18.881Z',
    name: 'Mini Cart Component',
    shownProductCount: '3',
    container: 'false',
    totalDisplay: 'SUBTOTAL',
    title: 'YOUR SHOPPING CART'
  };
};
