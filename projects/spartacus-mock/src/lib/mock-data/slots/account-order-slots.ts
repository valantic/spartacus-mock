import { ContentSlot } from '../../types';
import {contentSlot} from "../components/default/content-slot";
import {flexType} from "../components/default/flex-type";
import {faker} from "@faker-js/faker";

export const accountOrderSlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'BodyContent',
      'BodyContent',
      'BodyContent',
      [
        flexType('AccountOrderDetailsOverviewComponent', 'Account Order Details Overview', 'AccountOrderDetailsOverviewComponent', faker.datatype.uuid()),
        flexType('AccountOrderDetailsShippingComponent_TOP', 'Account Order Details Shipping TOP', 'AccountOrderDetailsShippingComponent', faker.datatype.uuid()),
        flexType('AccountOrderDetailsItemsComponent', 'Account Order Details Items', 'AccountOrderDetailsItemsComponent', faker.datatype.uuid()),
        flexType('ExportOrderEntriesComponent', 'Export Order Entries', 'ExportOrderEntriesComponent', faker.datatype.uuid()),
        flexType('AccountOrderDetailsTotalsComponent', 'Account Order Details Totals', 'AccountOrderDetailsTotalsComponent', faker.datatype.uuid()),
        flexType('AccountOrderDetailsShippingComponent_BOTTOM', 'Account Order Details Shipping BOTTOM', 'AccountOrderDetailsShippingComponent', faker.datatype.uuid()),
        flexType('AccountOrderDetailsActionsComponent', 'Account Order Details Actions', 'AccountOrderDetailsActionsComponent', faker.datatype.uuid()),
      ]
    ),
  ];
};
