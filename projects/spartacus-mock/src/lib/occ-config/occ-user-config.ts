import { OccConfig, OccEndpoints } from '@spartacus/core';

// needed to have a working typing
interface CartOccConfig extends OccConfig {
  backend: {
    occ: {
      endpoints: OccEndpoints;
    };
  };
}

export const occUserConfig: CartOccConfig = {
  backend: {
    occ: {
      // cannot extend from defaultOccCartConfig as it is not exported
      endpoints: {
        paymentDetailsAll: 'users/${userId}/paymentdetails',
        paymentDetail: 'users/${userId}/paymentdetails/${paymentDetailId}',
        anonymousConsentTemplates: 'users/anonymous/consenttemplates',
        consentTemplates: 'users/${userId}/consenttemplates',
        consents: 'users/${userId}/consents',
        consentDetail: 'users/${userId}/consents/${consentId}',
        addresses: 'users/${userId}/addresses',
        addressDetail: 'users/${userId}/addresses/${addressId}',
        addressVerification: 'users/${userId}/addresses/verification',
        customerCoupons: 'users/${userId}/customercoupons',
        claimCoupon: 'users/${userId}/customercoupons/${couponCode}/claim',
        couponNotification: 'users/${userId}/customercoupons/${couponCode}/notification',
        notificationPreference: 'users/${userId}/notificationpreferences',
        productInterests: 'users/${userId}/productinterests',
        getProductInterests:
          'users/${userId}/productinterests?fields=sorts,pagination,results(productInterestEntry,product(code))',
      },
    },
  },
};
