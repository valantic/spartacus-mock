import { Component } from '../../types';
import { flexTypeComponent } from './flex-type-component';
import { ResponsiveMediaInput, media } from './media';

export const simpleResponsiveBanner = (urlLink: string, mediaInput: ResponsiveMediaInput): Component => {
  return flexTypeComponent('SimpleResponsiveBannerComponent', undefined, {
    media: media(mediaInput),
    urlLink,
  });
};
