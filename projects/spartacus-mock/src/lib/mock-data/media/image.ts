import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { ImageModifier } from '../../types';

export const image = (additionalData?: Occ.Image, modifier?: ImageModifier): Occ.Image => {
  return {
    altText: faker.lorem.words(5),
    format: 'picture',
    galleryIndex: undefined,
    imageType: Occ.ImageType.PRIMARY,
    url: `https://picsum.photos/${modifier?.width || 1200}/${
      modifier?.height || 1200
    }.webp?random=${faker.datatype.number(999)}`,
    ...additionalData,
  };
};
