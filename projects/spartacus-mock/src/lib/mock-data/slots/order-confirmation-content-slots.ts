import { contentSlot } from '../components/default/content-slot';
import { ContentSlot } from '../../types';
import { flexType } from '../components/default/flex-type';

export const orderConfirmationContentSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'BodyContent',
      [
        flexType('OrderConfirmationThankMessageComponent'),
        flexType('OrderConfirmationOverviewComponent'),
        flexType('OrderConfirmationItemsComponent'),
        flexType('ExportOrderEntriesComponent'),
        flexType('OrderConfirmationShippingComponent'),
        flexType('OrderConfirmationTotalsComponent'),
        flexType('OrderConfirmationContinueButtonComponent'),
      ]
    ),

    contentSlot(
      'SideContent',
      []
    ),
  ];
};
