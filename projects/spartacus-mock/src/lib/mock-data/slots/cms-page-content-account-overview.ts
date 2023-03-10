import { faker } from '@faker-js/faker';
import { contentSlot } from '../components/default/content-slot';
import { CustomContentSlot } from '../types/types';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';

export const cmsPageContentSlotsAccountOverview = (): CustomContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3Slot-ContentPage',
      'Section3',
      'Section3 Slot for Content Page',
      [
        cmsFlexTypeComponent('account_overview_component', 'Account Overview', 'XxxAccountOverviewComponent', faker.datatype.uuid()),
      ]
    ),
  ];
};
