import { Occ } from '@spartacus/core';
import { createAddress } from '../account/addresses';
import { createCurrency } from '../general/currencies';
import { faker } from '@faker-js/faker';
import { createLanguage } from '../languages';

export const createUser = (additionalData?: Occ.User): Occ.User => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    currency: createCurrency(),
    customerId: faker.random.numeric(6),
    deactivationDate: faker.date.future(),
    defaultAddress: createAddress(),
    displayUid: faker.internet.email(firstName, lastName),
    firstName,
    language: createLanguage(),
    lastName,
    name: faker.name.fullName({ firstName, lastName }),
    title: 'Mr.',
    titleCode: 'mr',
    uid: faker.datatype.uuid(),
    ...additionalData,
  };
};
