import { faker } from '@faker-js/faker';
import { Component, ContentSlot } from '../../types';

export const contentSlot = (slotPosition: string, components: Component[]): ContentSlot => {
  return {
    slotId: `${slotPosition}-${faker.string.uuid()}`,
    slotUuid: faker.string.uuid(),
    position: slotPosition,
    name: `Slot-${slotPosition}`,
    slotShared: true,
    components: {
      component: components,
    },
  };
};
