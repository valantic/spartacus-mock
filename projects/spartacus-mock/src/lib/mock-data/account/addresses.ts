import { faker } from '@faker-js/faker';
import { Address } from '@spartacus/core';

export const getSharedAddress = (isDefaultAddress?: boolean, isShippingAddress?: boolean): Address => {
  return {
    country: {
      isocode: 'CH',
      name: 'Switzerland'
    },
    defaultAddress: isShippingAddress || true,
    firstName: 'Hans',
    lastName: 'Muster',
    formattedAddress: 'Musterstrasse 1, , Musterstadt, 1234',
    id: '0000',
    line1: 'Musterstrasse',
    line2: '1',
    postalCode: '1234',
    town: 'Musterstadt',
    phone: '00000',
    shippingAddress: isDefaultAddress || true,
    title: 'Mr.',
    titleCode: 'mr',
    visibleInAddressBook: isShippingAddress || true,
  }
}

export const createAddress = (): Address => {
  const gender = faker.helpers.arrayElement(['female', 'male']); // 1 = women, 2 = men
  const firstName = faker.name.firstName(gender as any);
  const lastName = faker.name.lastName(gender as any);

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
    country: {
      isocode: 'ch',
      name: 'Schweiz',
    },
    cellphone: faker.phone.number('+41 58 ### ## ##'),
    defaultAddress: false,
    shippingAddress: true,
    formattedAddress: '',
    phone: faker.phone.number('+41 79 ### ## ##'),
    visibleInAddressBook: true,
  };
};

export const availableAddresses = (): { addresses: Address[] } => {
  let addresses = [getSharedAddress()];
  for (let i = 0; i < faker.datatype.number({ min: 1, max: 7 }); i++) {
    addresses.push({
      country: {
        isocode: faker.address.countryCode('alpha-2'),
        name: faker.address.country(),
      },
      defaultAddress: false,
      firstName: faker.name.firstName(),
      formattedAddress: `${faker.address.city()}, ${faker.address.street()}, ${faker.address.zipCode(
        '#####'
      )}, ${faker.address.country()}`,
      id: faker.datatype.number().toString(),
      lastName: faker.name.lastName(),
      line1: faker.address.street(),
      line2: '',
      phone: faker.phone.number('079-###-##-##'),
      postalCode: faker.address.zipCode('#####'),
      titleCode: faker.name.prefix(),
      town: faker.address.city(),
    });
  }
  return { addresses };
};
