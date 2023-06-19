import { faker } from '@faker-js/faker';
import { NotificationPreference, NotificationPreferenceList } from '@spartacus/core';

export const createNotificationPreference = (additionalData?: NotificationPreference): NotificationPreference => {
  return {
    channel: 'EMAIL',
    enabled: true,
    value: faker.internet.email(),
    visible: true,
    ...additionalData,
  };
};

export const notificationPreferenceList = (): NotificationPreferenceList => {
  return {
    preferences: [
      createNotificationPreference(),
      createNotificationPreference({
        channel: 'SITE_MESSAGE',
        enabled: false,
        visible: true,
        value: '',
      }),
    ],
  };
};
