import { Component } from '../../types';
import { flexTypeComponent } from './flex-type-component';

export const simpleBannerComponent = (urlLink: string): Component => {
  return flexTypeComponent('SimpleBannerComponent', undefined, {
    external: 'false',
    media: {
      code: 'Simple_Banner_Media',
      mime: 'image/png',
      altText: 'SAP Commerce',
      url: `https://picsum.photos/360/240.webp?random=${Math.round(Math.random() * 1000)}`,
    },
    urlLink,
  });
};
