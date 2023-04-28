import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createCountry } from '../general/countries';
import { createRegion } from '../general/regions';

export const createAddress = (additionalData?: Occ.Address): Occ.Address => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id: faker.datatype.uuid(),
    title: 'Mr.',
    titleCode: 'mr',
    email: faker.internet.email(firstName, lastName),
    firstName,
    lastName,
    companyName: faker.company.name(),
    line1: faker.address.streetAddress(),
    line2: '',
    postalCode: faker.address.zipCode('####'),
    town: faker.address.city(),
    country: createCountry(),
    region: createRegion(),
    cellphone: faker.phone.number('+41 58 ### ## ##'),
    defaultAddress: false,
    shippingAddress: true,
    formattedAddress: '',
    phone: faker.phone.number('+41 79 ### ## ##'),
    visibleInAddressBook: true,
    ...additionalData,
  };
};

export const addresses = (): Occ.AddressList => {
  return {
    addresses: [
      createAddress({
        shippingAddress: true,
      }),
      createAddress({
        shippingAddress: false,
      }),
    ],
  };
};
