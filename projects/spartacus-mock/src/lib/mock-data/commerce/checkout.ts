import { Occ } from '@spartacus/core';
import { getSharedAddress } from '../account/addresses';
import { createPaymentDetails } from '../account/payments';
import { createDeliveryMode } from './delivery-mode';

import PriceType = Occ.PriceType;

export const getCheckoutDetails = (): Occ.Cart => {
  return {
    // @ts-ignore
    type: 'cartWsDTO',
    deliveryAddress: getSharedAddress(),
    deliveryMode: {
      code: 'standard-gross',
      deliveryCost: {
        currencyIso: 'USD',
        formattedValue: '$8.99',
        priceType: PriceType.BUY,
        value: 8.99,
      },
      description: '3-5 business days',
      name: 'Standard Delivery',
    },
    paymentInfo: createPaymentDetails(true),
  };
};

export const getDeliveryModes = (): Occ.DeliveryModeList => {
  return {
    deliveryModes: [
      createDeliveryMode('standard', 'Standard Delivery'),
      createDeliveryMode('premium', 'Premium Delivery'),
      createDeliveryMode('express', 'Express Delivery'),
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
