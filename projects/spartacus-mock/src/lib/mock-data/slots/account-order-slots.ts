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
        flexType('AccountOrderDetailsOverviewComponent'),
        flexType('AccountOrderDetailsShippingComponent', 'Shipping Top'),
        flexType('AccountOrderDetailsItemsComponent'),
        flexType('ExportOrderEntriesComponent'),
        flexType('AccountOrderDetailsTotalsComponent'),
        flexType('AccountOrderDetailsShippingComponent', 'Shipping Bottom'),
        flexType('AccountOrderDetailsActionsComponent'),
      ]
    ),
  ];
};
