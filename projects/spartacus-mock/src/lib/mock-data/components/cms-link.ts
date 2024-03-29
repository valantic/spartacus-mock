import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const cmsLinkComponent = (additionalData?: Occ.Component): Occ.Component => {
  return {
    uuid: faker.string.uuid(),
    uid: faker.string.uuid(),
    modifiedtime: faker.date.past(),
    name: faker.lorem.words(3),
    otherProperties: undefined,
    typeCode: 'CMSLinkComponent',
    linkName: faker.lorem.words(3),
    url: '/',
    target: '_self',
    external: false,
    ...additionalData,
  };
};
