import { ContentSlot } from '../../types';
import {contentSlot} from "../components/default/content-slot";
import {flexType} from "../components/default/flex-type";

export const accountOrderHistorySlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'BodyContent',
      [
        flexType('AccountOrderHistoryComponent')
      ]
    ),
  ];
};
