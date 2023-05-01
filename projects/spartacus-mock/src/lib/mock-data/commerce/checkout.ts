import { Occ } from '@spartacus/core';
import { createAddress } from '../account/addresses';
import { createPaymentDetails, DEFAULT_PAYMENT_ID } from '../account/payments';
import { createDeliveryMode } from './delivery-mode';

export const getCheckoutDetails = (additionalData?: Occ.Cart): Occ.Cart => {
  return {
    deliveryAddress: createAddress(),
    deliveryMode: createDeliveryMode({
      code: 'standard-gross',
      description: '3-5 business days',
      name: 'Standard Delivery',
    }),
    paymentInfo: createPaymentDetails({
      defaultPayment: true,
      id: DEFAULT_PAYMENT_ID,
    }),
    ...additionalData,
  };
};

export const getDeliveryModes = (): Occ.DeliveryModeList => {
  return {
    deliveryModes: [
      createDeliveryMode({ code: 'standard', name: 'Standard Delivery' }),
      createDeliveryMode({ code: 'premium', name: 'Premium Delivery' }),
      createDeliveryMode({ code: 'express', name: 'Express Delivery' }),
    ],
  };
};

export const getCardTypes = (): Occ.CardTypeList => {
  return {
    cardTypes: [
      {
        code: 'amex',
        name: 'American Express',
      },
      {
        code: 'maestro',
        name: 'Maestro',
      },
      {
        code: 'switch',
        name: 'Switch',
      },
      {
        code: 'visa',
        name: 'Visa',
      },
      {
        code: 'master',
        name: 'Mastercard',
      },
      {
        code: 'mastercard_eurocard',
        name: 'Mastercard/Eurocard',
      },
      {
        code: 'diners',
        name: "Diner's Club",
      },
    ],
  };
};
