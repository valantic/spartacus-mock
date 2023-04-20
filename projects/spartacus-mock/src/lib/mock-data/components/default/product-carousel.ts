import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';

export const productCarousel = (productCodes: string[], title: string): Component => {
  return flexTypeComponent('ProductCarouselComponent', undefined, {
    popup: 'false',
    scroll: 'ALLVISIBLE',
    productCodes: productCodes.join(' '),
    title,
  });
};
