import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';

export const searchBoxComponent = (): Component => {
  return flexTypeComponent('SearchBoxComponent', undefined, {
    maxSuggestions: '5',
    maxProducts: '5',
    displaySuggestions: 'true',
    displayProducts: 'true',
    displayProductImages: 'true',
    waitTimeBeforeRequest: '0',
    minCharactersBeforeRequest: '0',
  });
};
