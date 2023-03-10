import { contentSlot } from '../components/default/content-slot';
import { faker } from '@faker-js/faker';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import { CmsComponentAdditionalData, ContentSlot } from '../../types';

export const cmsPageContentSlotsFlexTypeComponent = (uid: string, name: string, flexType: string, uuid?: string, additionalData?: CmsComponentAdditionalData): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3Slot-ContentPage',
      'Section3',
      'Section3 Slot for Content Page',
      [
        cmsFlexTypeComponent(uid, name, flexType, uuid || faker.datatype.uuid(), additionalData)
      ]
    ),
  ];
};
