import { contentSlot } from '../components/default/content-slot';
import { faker } from '@faker-js/faker';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import { CmsComponentAdditionalData, ContentSlot } from '../../types';

export const cmsPageContentSlotsFlexTypeComponent = (uid: string, name: string, flexType: string, uuid?: string, additionalData?: CmsComponentAdditionalData): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3',
      [
        cmsFlexTypeComponent(uid, name, flexType, uuid || faker.datatype.uuid(), additionalData)
      ]
    ),
  ];
};
