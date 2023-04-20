import { Component } from '../../../types';
import {flexTypeComponent} from "./flex-type-component";

export const siteContextComponent = (context: string): Component => {
  return flexTypeComponent('CMSSiteContextComponent', undefined, {
    context
  })
};
