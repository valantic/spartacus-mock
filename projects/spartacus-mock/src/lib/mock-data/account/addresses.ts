import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createCountry, createRegion } from '../general';

export const createAddress = (additionalData?: Occ.Address): Occ.Address => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    title: 'Mr.',
    titleCode: 'mr',
    email: faker.internet.email({ firstName, lastName }),
    firstName,
    lastName,
    companyName: faker.company.name(),
    line1: faker.location.streetAddress(),
    line2: '',
    postalCode: faker.location.zipCode('####'),
    town: faker.location.city(),
    country: createCountry(),
    region: createRegion(),
    cellphone: faker.phone.number(),
    defaultAddress: false,
    shippingAddress: true,
    formattedAddress: '',
    phone: faker.phone.number(),
    visibleInAddressBook: true,
    ...additionalData,
  };
};

export const addressList = (): Occ.AddressList => {
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
