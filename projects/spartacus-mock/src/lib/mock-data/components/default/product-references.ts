import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';

export const productReferencesComponent = (referenceType: string, title: string): Component => {
  return flexTypeComponent('ProductReferencesComponent', undefined, {
    productReferenceTypes: referenceType,
    displayProductPrices: 'true',
    maximumNumberProducts: '5',
    displayProductTitles: 'true',
    title,
  });
};
