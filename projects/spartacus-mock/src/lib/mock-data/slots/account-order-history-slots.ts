import { ContentSlot } from '../../types';
import {contentSlot} from "../components/default/content-slot";
import {flexTypeComponent} from "../components/default/flex-type-component";

export const accountOrderHistorySlots = (): ContentSlot[] => {
  // content slots
  return [
    contentSlot(
      'BodyContent',
      [
        flexTypeComponent('AccountOrderHistoryComponent')
      ]
    ),
  ];
};
