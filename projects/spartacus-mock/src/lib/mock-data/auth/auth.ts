import { AuthToken } from '@spartacus/core';
import { faker } from '@faker-js/faker';

export const createAuthToken = (): AuthToken => {
  return {
    access_token: faker.datatype.uuid(),
    refresh_token: faker.datatype.uuid(),
    expires_at: faker.date.future().toTimeString(),
    granted_scopes: ['basic', 'openid'],
    access_token_stored_at: '',
    token_type: 'bearer',
  };
};

export const authRevoke = () => {
  return {};
};
