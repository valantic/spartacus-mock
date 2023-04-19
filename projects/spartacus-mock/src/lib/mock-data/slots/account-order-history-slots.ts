import { ContentSlot } from '../../types';
import {contentSlot} from "../components/default/content-slot";
import {flexType} from "../components/default/flex-type";
import {faker} from "@faker-js/faker";

export const accountOrderHistorySlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'BodyContent',
      'BodyContent',
      'BodyContent',
      [
        flexType('AccountOrderHistoryComponent', 'Account Order History Component', 'AccountOrderHistoryComponent', faker.datatype.uuid())
      ]
    ),
  ];
};
