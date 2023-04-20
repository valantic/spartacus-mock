import { Image, ImageType } from '@spartacus/core';
import { faker } from '@faker-js/faker';

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
