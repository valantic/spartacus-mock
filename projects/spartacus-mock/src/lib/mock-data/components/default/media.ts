import { CmsBannerComponentMedia, CmsResponsiveBannerComponentMedia } from '@spartacus/core';

export interface ResponsiveMediaRendition {
  key: string;
  width: number;
  height: number;
}

export interface ResponsiveMediaInput {
  code: string;
  altText: string;
  renditions: ResponsiveMediaRendition[];
}

export const media = (mediaInput: ResponsiveMediaInput) => {
  const mediaObject: CmsResponsiveBannerComponentMedia = {};

  for (const rendition of mediaInput.renditions) {
    // @ts-ignore
    mediaObject[rendition.key] = {
      code: `${mediaInput.code}-${rendition.width}x${rendition.height}`,
      mime: 'image/jpeg',
      altText: mediaInput.altText,
      url: `https://picsum.photos/${rendition.width}/${rendition.height}.webp?random=${Math.round(Math.random() * 1000)}`
    } as CmsBannerComponentMedia;
  }

  return mediaObject;
};
