import { faker } from '@faker-js/faker';
import { getSharedAddress } from './addresses';

export const DEFAULT_PAYMENT_ID = 8796126183466;

export const createPaymentDetails = (defaultPayment: boolean): object => {
  return {
    accountHolderName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    billingAddress: getSharedAddress(false, false),
    cardNumber: '************1111',
    cardType: {
      code: 'visa',
      name: 'Visa',
    },
    defaultPayment,
    expiryMonth: faker.datatype.number({ min: 1, max: 12 }).toString(),
    expiryYear: '2030',
    id: defaultPayment ? DEFAULT_PAYMENT_ID : faker.datatype.number({ min: 100000000000, max: 999999999999 }),
    saved: true,
    subscriptionId: faker.datatype.uuid(),
  };
};

export const payments = () => {
  return {
    payments: [
      createPaymentDetails(true),
      createPaymentDetails(false),
      createPaymentDetails(false),
      createPaymentDetails(false),
    ],
  };
};
