import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createAddress } from '../account';
import { createCurrency } from '../general';
import { createLanguage } from '../languages';

export const createUser = (additionalData?: Occ.User): Occ.User => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    currency: createCurrency(),
    customerId: faker.string.numeric(6),
    deactivationDate: faker.date.future(),
    defaultAddress: createAddress(),
    displayUid: faker.internet.email({ firstName, lastName }),
    firstName,
    language: createLanguage(),
    lastName,
    name: faker.person.fullName({ firstName, lastName }),
    title: 'Mr.',
    titleCode: 'mr',
    uid: faker.string.uuid(),
    ...additionalData,
  };
};
