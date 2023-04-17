import { Occ } from '@spartacus/core';
import { getSharedAddress } from '../account/addresses';
import PriceType = Occ.PriceType;
import { getDefaultPayment } from '../account/payments';
import { createDeliveryMode } from './delivery-mode';

export const getDeliveryAddress = (): Occ.Cart => {
  return {
    // @ts-ignore
    type : 'cartWsDTO',
    deliveryAddress: getSharedAddress(),
    deliveryMode: {
      code: 'standard-gross',
      deliveryCost: {
        currencyIso: 'USD',
        formattedValue: '$8.99',
        priceType: PriceType.BUY,
        value: 8.99
      },
      description: '3-5 business days',
      name: 'Standard Delivery'
    },
    paymentInfo: getDefaultPayment()
  }
}

export const getDeliveryModes = (): Occ.DeliveryModeList => {
  return {
    deliveryModes: [
      createDeliveryMode('standard', 'Standard Delivery'),
      createDeliveryMode('premium', 'Premium Delivery'),
      createDeliveryMode('express', 'Express Delivery'),
    ]
  }
}
