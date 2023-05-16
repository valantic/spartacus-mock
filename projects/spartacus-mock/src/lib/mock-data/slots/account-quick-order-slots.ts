import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const accountQuickOrderSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('BodyContent', [
      flexTypeComponent('QuickOrderComponent'),
      flexTypeComponent('ImportExportOrderEntriesComponent'),
    ]),
  ];
};
