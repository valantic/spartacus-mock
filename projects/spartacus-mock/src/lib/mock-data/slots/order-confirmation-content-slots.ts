import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const orderConfirmationContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot('BodyContent', [
      flexTypeComponent('OrderConfirmationThankMessageComponent'),
      flexTypeComponent('OrderConfirmationOverviewComponent'),
      flexTypeComponent('OrderConfirmationItemsComponent'),
      flexTypeComponent('ExportOrderEntriesComponent'),
      flexTypeComponent('OrderConfirmationShippingComponent'),
      flexTypeComponent('OrderConfirmationTotalsComponent'),
      flexTypeComponent('OrderConfirmationContinueButtonComponent'),
    ]),

    contentSlot('SideContent', []),
  ];
};
