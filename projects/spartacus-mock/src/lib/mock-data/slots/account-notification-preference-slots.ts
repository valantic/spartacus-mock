import { ContentSlot } from '../../types';
import { contentSlot } from '../components';
import { flexTypeComponent } from '../components';

export const accountNotificationPreferenceSlots = (): ContentSlot[] => {
  // content slots
  return [contentSlot('BodyContent', [flexTypeComponent('NotificationPreferenceComponent')])];
};
