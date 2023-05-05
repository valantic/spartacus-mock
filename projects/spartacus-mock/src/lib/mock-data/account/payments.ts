import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createAddress } from './addresses';

export const DEFAULT_PAYMENT_ID: string = '8796126183466';

export const createCardType = (additionalData?: Occ.CardType): Occ.CardType => {
  return {
    code: 'maestro',
    name: 'Maestro',
    ...additionalData,
  };
};

export const createPaymentDetails = (additionalData?: Occ.PaymentDetails): Occ.PaymentDetails => {
  return {
    accountHolderName: faker.name.fullName(),
    billingAddress: createAddress({ shippingAddress: false }),
    cardNumber: `************${faker.datatype.number({ min: 1000, max: 9999 })}`,
    cardType: createCardType(),
    defaultPayment: false,
    expiryMonth: faker.datatype.number({ min: 1, max: 12 }).toString(),
    expiryYear: faker.datatype.number({ min: 2030, max: 2050 }).toString(),
    id: faker.random.numeric(9),
    saved: true,
    subscriptionId: faker.datatype.uuid(),
    ...additionalData,
  };
};

export const paymentDetailsList = (): Occ.PaymentDetailsList => {
  return {
    payments: [
      createPaymentDetails({
        defaultPayment: true,
        id: DEFAULT_PAYMENT_ID,
      }),
      createPaymentDetails({
        cardType: createCardType({
          code: 'visa',
          name: 'Visa',
        }),
      }),
      createPaymentDetails({
        cardType: createCardType({
          code: 'amex',
          name: 'American Express',
        }),
      }),
      createPaymentDetails({
        cardType: createCardType({
          code: 'diners',
          name: "Diner's Club",
        }),
      }),
    ],
  };
};
