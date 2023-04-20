import { faker } from '@faker-js/faker';
import { Component, ContentSlot } from '../../../types';

export const contentSlot = (slotPosition: string, components: Component[], slotName?: string, slotId?: string ): ContentSlot => {
  return {
    slotId: slotId ?? `${slotPosition}-${faker.datatype.uuid()}`,
    slotUuid: faker.datatype.uuid(),
    position: slotPosition,
    name: slotName ?? `Slot-${slotPosition}`,
    slotShared: true,
    components: {
      component: components,
    }
  };
};
