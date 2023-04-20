import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexTypeComponent } from '../components/default/flex-type-component';

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
