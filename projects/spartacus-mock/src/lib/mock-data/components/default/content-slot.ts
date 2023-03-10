import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { Component, ContentSlot } from '../../../types';

export const contentSlot = (slotId: string, slotPosition: string, slotName: string, components: Component[]): ContentSlot => {
  const componentList: Occ.Component[] = [];

  const contentSlotObject: ContentSlot = {
    slotId,
    slotUuid: faker.datatype.uuid(),
    position: slotPosition,
    name: slotName,
    slotShared: true,
    components: {
      component: componentList,
    }
  };

  for (const component of components) {
    componentList.push(component);
  }

  if (contentSlotObject.components) {
    contentSlotObject.components.component = componentList;
  }


  return contentSlotObject;
};
