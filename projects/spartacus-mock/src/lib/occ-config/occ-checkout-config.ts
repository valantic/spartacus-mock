import { OccConfig } from '@spartacus/core';
import { CheckoutOccEndpoints } from '@spartacus/checkout/base/occ';

// needed to have a working typing
interface CheckoutOccConfig extends OccConfig {
  backend: {
    occ: {
      endpoints: CheckoutOccEndpoints;
    }
  };
}

export const occCheckoutConfig: CheckoutOccConfig = {
  backend: {
    occ: {
      // cannot extend from defaultOccCheckoutConfig as it is not exported
      endpoints: {
        setDeliveryAddress:
          'users/${userId}/carts/${cartId}/addresses/delivery',
        cardTypes: 'cardtypes',
        createDeliveryAddress:
          'users/${userId}/carts/${cartId}/addresses/delivery',
        removeDeliveryAddress:
          'users/${userId}/carts/${cartId}/addresses/delivery',
        deliveryMode: 'users/${userId}/carts/${cartId}/deliverymode',
        setDeliveryMode: 'users/${userId}/carts/${cartId}/deliverymode',
        clearDeliveryMode: 'users/${userId}/carts/${cartId}/deliverymode',
        deliveryModes: 'users/${userId}/carts/${cartId}/deliverymodes',
        setCartPaymentDetails: 'users/${userId}/carts/${cartId}/paymentdetails',
        paymentProviderSubInfo:
          'users/${userId}/carts/${cartId}/payment/sop/request?responseUrl=sampleUrl',
        createPaymentDetails:
          'users/${userId}/carts/${cartId}/payment/sop/response',
        getCheckoutDetails:
          'users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL)',
      },
    },
  },
};
