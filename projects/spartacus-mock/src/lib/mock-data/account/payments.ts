import { getSharedAddress } from './addresses';

export function getDefaultPayment() {
  return {
    accountHolderName: 'Hans Muster',
    billingAddress: getSharedAddress(false, false),
    cardNumber: '************1111',
    cardType: {
      code: 'visa',
      name: 'Visa',
    },
    defaultPayment: true,
    expiryMonth: '3',
    expiryYear: '2024',
    id: '8796126183466',
    saved: true,
    subscriptionId: '37bf1069-d34c-4da6-aebe-54e31e3d51e7',
  };
}

export const payments = () => {
  return {
    payments: [getDefaultPayment()],
  };
};
