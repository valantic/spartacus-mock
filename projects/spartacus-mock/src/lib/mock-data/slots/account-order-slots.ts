import { ContentSlot } from '../../types';
import { contentSlot } from '../components/default/content-slot';
import { flexTypeComponent } from '../components/default/flex-type-component';

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
