import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const accountOrderSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('BodyContent', [
      flexTypeComponent('AccountOrderDetailsOverviewComponent'),
      flexTypeComponent('AccountOrderDetailsShippingComponent'),
      flexTypeComponent('AccountOrderDetailsItemsComponent'),
      flexTypeComponent('ExportOrderEntriesComponent'),
      flexTypeComponent('AccountOrderDetailsTotalsComponent'),
      flexTypeComponent('AccountOrderDetailsShippingComponent'),
      flexTypeComponent('AccountOrderDetailsActionsComponent'),
    ]),
  ];
};
