import { Occ } from '@spartacus/core';
import { user } from '../auth/user';
import { getDeliveryModes } from './checkout';

import User = Occ.User;

export const getPaymentSopRequest = (): object => {
  const userData: User = user(false);

  return {
    mappingLabels: {
      entry: [
        {
          key: 'hybris_billTo_country',
          value: 'billTo_country',
        },
        {
          key: 'hybris_card_expiration_year',
          value: 'card_expirationYear',
        },
        {
          key: 'hybris_combined_expiry_date',
          value: 'false',
        },
        {
          key: 'hybris_sop_decision',
          value: 'decision',
        },
        {
          key: 'hybris_card_expiry_date',
          value: 'card_expirationDate',
        },
        {
          key: 'hybris_card_expiration_month',
          value: 'card_expirationMonth',
        },
        {
          key: 'hybris_billTo_street1',
          value: 'billTo_street1',
        },
        {
          key: 'hybris_sop_card_number',
          value: 'card_accountNumber',
        },
        {
          key: 'hybris_sop_uses_public_signature',
          value: 'true',
        },
        {
          key: 'hybris_card_cvn',
          value: 'card_cvNumber',
        },
        {
          key: 'hybris_billTo_lastname',
          value: 'billTo_lastName',
        },
        {
          key: 'hybris_sop_subscriptionID',
          value: 'paySubscriptionCreateReply_subscriptionID',
        },
        {
          key: 'hybris_billTo_firstname',
          value: 'billTo_firstName',
        },
        {
          key: 'hybris_sop_amount',
          value: 'amount',
        },
        {
          key: 'hybris_sop_currency',
          value: '',
        },
        {
          key: 'hybris_card_type',
          value: 'card_cardType',
        },
        {
          key: 'hybris_sop_reason_code',
          value: 'reasonCode',
        },
        {
          key: 'hybris_sop_public_signature',
          value: 'paySubscriptionCreateReply_subscriptionIDPublicSignature',
        },
        {
          key: 'hybris_separator_expiry_date',
          value: '',
        },
        {
          key: 'hybris_account_holder_name',
          value: 'card_nameOnCard',
        },
        {
          key: 'hybris_card_number',
          value: 'card_accountNumber',
        },
        {
          key: 'hybris_billTo_phone_number',
          value: 'billTo_phoneNumber',
        },
        {
          key: 'hybris_billTo_city',
          value: 'billTo_city',
        },
        {
          key: 'hybris_billTo_region',
          value: 'billTo_state',
        },
        {
          key: 'hybris_billTo_postalcode',
          value: 'billTo_postalCode',
        },
      ],
    },
    parameters: {
      entry: [
        {
          key: 'billTo_city',
          value: userData.defaultAddress?.town,
        },
        {
          key: 'billTo_email',
          value: userData.uid,
        },
        {
          key: 'shipTo_lastName',
          value: userData.lastName,
        },
        {
          key: 'recurringSubscriptionInfo_automaticRenew',
          value: 'false',
        },
        {
          key: 'billTo_country',
          value: userData.defaultAddress?.country?.isocode,
        },
        {
          key: 'billTo_lastName',
          value: userData.lastName,
        },
        {
          key: 'billTo_street2',
          value: userData.defaultAddress?.line2,
        },
        {
          key: 'billTo_street1',
          value: userData.defaultAddress?.line1,
        },
        {
          key: 'shipTo_shippingMethod',
          // @ts-ignore
          value: getDeliveryModes().deliveryModes ? getDeliveryModes().deliveryModes[0].code : '',
        },
        {
          key: 'orderPage_transactionType',
          value: 'subscription',
        },
        {
          key: 'orderPage_declineResponseURL',
          value: 'sampleUrl',
        },
        {
          key: 'orderPage_merchantURLPostAddress',
          value: 'https://localhost:9002/occ/v2/electronics-spa/integration/merchant_callback',
        },
        {
          key: 'shipTo_city',
          value: userData.defaultAddress?.town,
        },
        {
          key: 'recurringSubscriptionInfo_startDate',
          value: '20230420',
        },
        {
          key: 'shipTo_street1',
          value: userData.defaultAddress?.line1,
        },
        {
          key: 'shipTo_street2',
          value: userData.defaultAddress?.line2,
        },
        {
          key: 'recurringSubscriptionInfo_frequency',
          value: 'on-demand',
        },
        {
          key: 'shipTo_postalCode',
          value: userData.defaultAddress?.postalCode,
        },
        {
          key: 'currency',
          value: userData.currency?.isocode,
        },
        {
          key: 'orderPage_signaturePublic',
          value: 'xabk2WIJBlmTHs2aHXo2DkFPwqs=',
        },
        {
          key: 'shipTo_country',
          value: userData.defaultAddress?.country?.isocode,
        },
        {
          key: 'orderPage_serialNumber',
          value: 'your_serial_number',
        },
        {
          key: 'recurringSubscriptionInfo_signaturePublic',
          value: 'oRyPUpeJAQXNr0NI72nBLgrTvYY=',
        },
        {
          key: 'amount',
          value: '0',
        },
        {
          key: 'recurringSubscriptionInfo_numberOfPayments',
          value: '0',
        },
        {
          key: 'shipTo_firstName',
          value: userData.firstName,
        },
        {
          key: 'orderPage_colorScheme',
          value: 'blue',
        },
        {
          key: 'orderPage_receiptResponseURL',
          value: 'sampleUrl',
        },
        {
          key: 'billTo_postalCode',
          value: userData.defaultAddress?.postalCode,
        },
        {
          key: 'shipTo_phoneNumber',
          value: '435345345',
        },
        {
          key: 'orderPage_version',
          value: '7',
        },
        {
          key: 'billTo_firstName',
          value: userData.firstName,
        },
        {
          key: 'orderPage_timestamp',
          value: '1682004248861',
        },
        {
          key: 'orderPage_ignoreCVN',
          value: 'true',
        },
        {
          key: 'recurringSubscriptionInfo_amount',
          value: '0',
        },
        {
          key: 'merchantID',
          value: 'your_merchant_id',
        },
        {
          key: 'orderPage_cancelResponseURL',
          value: 'sampleUrl',
        },
        {
          key: 'billTo_phoneNumber',
          value: '435345345',
        },
        {
          key: 'orderPage_ignoreAVS',
          value: 'true',
        },
      ],
    },
    postUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/acceleratorservices/sop-mock/process',
  };
};
