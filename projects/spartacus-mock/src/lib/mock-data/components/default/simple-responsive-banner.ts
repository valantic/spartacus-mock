import { ResponsiveMediaInput, media } from './media';
import { Component } from '../../../types';
import { flexTypeComponent } from './flex-type-component';

export const simpleResponsiveBanner = (urlLink: string, mediaInput: ResponsiveMediaInput): Component => {
  return flexTypeComponent('SimpleResponsiveBannerComponent', undefined, {
    media: media(mediaInput),
    urlLink,
  });
};
