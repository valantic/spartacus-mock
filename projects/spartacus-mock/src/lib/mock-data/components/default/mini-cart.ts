import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';

export const miniCartComponent = (): Component => {
  return flexTypeComponent('MiniCartComponent', undefined, {
    totalDisplay: 'SUBTOTAL',
    title: 'YOUR SHOPPING CART',
    shownProductCount: '3',
  });
};
