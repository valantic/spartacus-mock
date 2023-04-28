import { faker } from '@faker-js/faker';
import { Image, ImageType, Occ } from '@spartacus/core';
import { ImageModifier } from '../../types';

export const mediaImage = (
  format?: string,
  imageType?: ImageType,
  width?: number,
  height?: number,
  index?: number
): Image => {
  return {
    altText: faker.lorem.words(6),
    role: '',
    format: format || 'picture',
    galleryIndex: imageType === ImageType.GALLERY ? index : undefined,
    imageType: imageType || ImageType.PRIMARY,
    url: `https://picsum.photos/${width || 1200}/${height || 1200}.webp?random=${faker.datatype.number(999)}`,
  };
};

export const image = (additionalData?: Occ.Image, modifier?: ImageModifier): Occ.Image => {
  return {
    altText: faker.lorem.words(5),
    format: modifier?.format || 'picture',
    galleryIndex: modifier?.galleryIndex || undefined,
    imageType: Occ.ImageType.PRIMARY,
    url: `https://picsum.photos/${modifier?.width || 1200}/${
      modifier?.height || 1200
    }.webp?random=${faker.datatype.number(999)}`,
    ...additionalData,
  };
};
