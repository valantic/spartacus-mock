import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const accountSavedCartSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('BodyContent', [
      flexTypeComponent('SavedCartDetailsOverviewComponent'),
      flexTypeComponent('SavedCartDetailsItemsComponent'),
      flexTypeComponent('ImportExportOrderEntriesComponent'),
      flexTypeComponent('SavedCartDetailsActionComponent'),
    ]),
  ];
};
