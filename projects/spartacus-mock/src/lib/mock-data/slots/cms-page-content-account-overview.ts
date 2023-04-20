import { faker } from '@faker-js/faker';
import { contentSlot } from '../components/default/content-slot';
import { cmsFlexTypeComponent } from '../components/default/cms-flex-type';
import {ContentSlot} from "../../types";

export const cmsPageContentSlotsAccountOverview = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'Section3',
      [
        cmsFlexTypeComponent('account_overview_component', 'Account Overview', 'XxxAccountOverviewComponent', faker.datatype.uuid()),
      ]
    ),
  ];
};
