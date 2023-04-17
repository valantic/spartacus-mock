import { faker } from '@faker-js/faker';
import { Address } from '@spartacus/core';

export const sharedAddress: Address = {
  country: {
    isocode: 'BY',
    name: 'Belarus',
  },
  defaultAddress: true,
  firstName: 'test',
  formattedAddress: 'test-test-test-test 15, test, 00000',
  id: '0000',
  lastName: 'test',
  line1: 'test-test-test-test 15',
  line2: '',
  phone: '00000',
  postalCode: '00000',
  shippingAddress: true,
  title: 'Mr.',
  titleCode: 'mr',
  town: 'test',
  visibleInAddressBook: true,
};

export const availableAddresses = (): { addresses: Address[] } => {
  let addresses = [sharedAddress];
  for (let i = 0; i < faker.datatype.number({ min: 1, max: 7 }); i++) {
    addresses.push({
      country: {
        isocode: faker.address.countryCode('alpha-2'),
        name: faker.address.country(),
      },
      defaultAddress: false,
      firstName: faker.name.firstName(),
      formattedAddress: `${faker.address.city()}, ${faker.address.streetName()}, ${faker.address.zipCode(
        '#####'
      )}, ${faker.address.country()}`,
      id: faker.datatype.number().toString(),
      lastName: faker.name.lastName(),
      line1: faker.address.streetName(),
      line2: '',
      phone: faker.phone.number('079-###-##-##'),
      postalCode: faker.address.zipCode('#####'),
      titleCode: faker.name.prefix(),
      town: faker.address.city(),
    });
  }
  return { addresses };
};
