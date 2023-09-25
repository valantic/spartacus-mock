import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createPrice } from './price';

export const createDeliveryMode = (additionalData?: Occ.DeliveryMode): Occ.DeliveryMode => {
  return {
    code: faker.string.uuid(),
    name: faker.lorem.words(3),
    description: faker.lorem.sentences(1),
    deliveryCost: createPrice(),
    ...additionalData,
  };
};
