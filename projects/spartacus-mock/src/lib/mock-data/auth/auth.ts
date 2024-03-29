import { faker } from '@faker-js/faker';
import { AuthToken } from '@spartacus/core';

export const createAuthToken = (): AuthToken => {
  return {
    access_token: faker.string.uuid(),
    refresh_token: faker.string.uuid(),
    expires_at: faker.date.future().toTimeString(),
    granted_scopes: ['basic', 'openid'],
    access_token_stored_at: '',
    token_type: 'bearer',
  };
};

export const authRevoke = () => {
  return {};
};
