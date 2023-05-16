import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const accountSavedCartsSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('BodyContent', [
      flexTypeComponent('AccountSavedCartHistoryComponent'),
      flexTypeComponent('ImportOrderEntriesComponent'),
    ]),
  ];
};
