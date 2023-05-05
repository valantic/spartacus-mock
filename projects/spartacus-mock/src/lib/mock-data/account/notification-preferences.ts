import { NotificationPreference, NotificationPreferenceList } from '@spartacus/core';
import { faker } from '@faker-js/faker';

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
