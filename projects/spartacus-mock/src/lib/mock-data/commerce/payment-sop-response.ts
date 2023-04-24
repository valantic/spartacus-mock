import { Occ } from '@spartacus/core';
import { user } from '../auth/user';
import { getDeliveryModes } from './checkout';

import User = Occ.User;

export const getPaymentSopResponse = (): string => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <title>Mocked Silent Order Post Page</title>
  <script type="text/javascript" src="/acceleratorservices/ruxitagentjs_ICA27NVfgqrtux_10259230120101641.js"
          data-dtconfig="uam=1|app=ea7c4b59f27d43eb|coo=1|featureHash=ICA27NVfgqrtux|vcv=2|rdnt=1|uxrgce=1|bp=3|cuc=v4dqk9v4|mel=100000|dpvc=1|ssv=4|lastModification=1682307295881|dtVersion=10259230120101641|tp=500,50,0,1|uxdcw=1500|agentUri=/acceleratorservices/ruxitagentjs_ICA27NVfgqrtux_10259230120101641.js|reportUrl=/acceleratorservices/rb_e40d9fff-34a6-4838-bd6f-5bc4d6171fbc|rid=RID_590245385|rpid=1919382042|domain=azure.com"></script>
  <link rel="shortcut icon" href="/acceleratorservices/_ui/hop-mock/images/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" type="text/css" media="screen" href="/acceleratorservices/_ui/hop-mock/css/common.css" />
</head>
<body onload="document.silentOrderPostForm.submit()">
<div id="mockwrapper">
  <div id="mockpage">
    <div id="mockHeader">
      <div class="logo">
        <img alt="logo" src="/acceleratorservices/_ui/hop-mock/images/logo.png" />
      </div>
    </div>
    <div style="clear: both;"></div>
    <div id="item_container_holder">
      <div class="item_container">
        <div id="debugWelcome">
          <h3>
            <img src="/acceleratorservices/_ui/hop-mock/images/spinner.gif" alt="image spinner" />&nbsp;
            Please wait while we transfer you</h3>
        </div>
      </div>
      <div class="item_container">
        <form id="silentOrderPostForm" name="silentOrderPostForm" action="javascript:false;" method="post">
          <div id="postFormItems">
            <dl>
              <input type="hidden" id="recurringSubscriptionInfo_automaticRenew"
                     name="recurringSubscriptionInfo_automaticRenew" value="false" />
              <input type="hidden" id="billTo_lastName" name="billTo_lastName" value="Muster" />
              <input type="hidden" id="billTo_street2" name="billTo_street2" value="1" />
              <input type="hidden" id="ccAuthReply_cvCode" name="ccAuthReply_cvCode" value="M" />
              <input type="hidden" id="billTo_street1" name="billTo_street1" value="Musterstrasse 1" />
              <input type="hidden" id="shipTo_shippingMethod" name="shipTo_shippingMethod" value="standard" />
              <input type="hidden" id="orderPage_declineResponseURL" name="orderPage_declineResponseURL"
                     value="sampleUrl" />
              <input type="hidden" id="recurringSubscriptionInfo_startDate" name="recurringSubscriptionInfo_startDate"
                     value="20230420" />
              <input type="hidden" id="recurringSubscriptionInfo_frequency" name="recurringSubscriptionInfo_frequency"
                     value="on-demand" />
              <input type="hidden" id="shipTo_postalCode" name="shipTo_postalCode" value="1234" />
              <input type="hidden" id="orderPage_signaturePublic" name="orderPage_signaturePublic"
                     value="xabk2WIJBlmTHs2aHXo2DkFPwqs=" />
              <input type="hidden" id="shipTo_country" name="shipTo_country" value="CH" />
              <input type="hidden" id="card_accountNumber" name="card_accountNumber" value="************1111" />
              <input type="hidden" id="orderPage_serialNumber" name="orderPage_serialNumber"
                     value="your_serial_number" />
              <input type="hidden" id="recurringSubscriptionInfo_signaturePublic"
                     name="recurringSubscriptionInfo_signaturePublic" value="oRyPUpeJAQXNr0NI72nBLgrTvYY=" />
              <input type="hidden" id="card_nameOnCard" name="card_nameOnCard" value="Hans Muster" />
              <input type="hidden" id="shipTo_phoneNumber" name="shipTo_phoneNumber" value="435345345" />
              <input type="hidden" id="orderPage_ignoreCVN" name="orderPage_ignoreCVN" value="true" />
              <input type="hidden" id="card_expirationMonth" name="card_expirationMonth" value="04" />
              <input type="hidden" id="orderPage_cancelResponseURL" name="orderPage_cancelResponseURL"
                     value="sampleUrl" />
              <input type="hidden" id="orderPage_ignoreAVS" name="orderPage_ignoreAVS" value="true" />
              <input type="hidden" id="billTo_city" name="billTo_city" value="Musterstadt" />
              <input type="hidden" id="billTo_email" name="billTo_email" value="hans.muster@gmail.com" />
              <input type="hidden" id="shipTo_lastName" name="shipTo_lastName" value="Muster" />
              <input type="hidden" id="decision_publicSignature" name="decision_publicSignature"
                     value="mEhlMRLCsuPimhp50ElrY94zFyc=" />
              <input type="hidden" id="billTo_country" name="billTo_country" value="CH" />
              <input type="hidden" id="orderPage_transactionType" name="orderPage_transactionType"
                     value="subscription" />
              <input type="hidden" id="orderPage_merchantURLPostAddress" name="orderPage_merchantURLPostAddress"
                     value="https://localhost:9002/occ/v2/electronics-spa/integration/merchant_callback" />
              <input type="hidden" id="card_cardType" name="card_cardType" value="visa" />
              <input type="hidden" id="shipTo_city" name="shipTo_city" value="Musterstadt" />
              <input type="hidden" id="shipTo_street1" name="shipTo_street1" value="Musterstrasse" />
              <input type="hidden" id="shipTo_street2" name="shipTo_street2" value="1" />
              <input type="hidden" id="currency" name="currency" value="USD" />
              <input type="hidden" id="reasonCode" name="reasonCode" value="100" />
              <input type="hidden" id="paySubscriptionCreateReply_subscriptionID"
                     name="paySubscriptionCreateReply_subscriptionID" value="d7be486f-7d9d-461f-903c-70441e80ffa2" />
              <input type="hidden" id="amount" name="amount" value="0" />
              <input type="hidden" id="decision" name="decision" value="ACCEPT" />
              <input type="hidden" id="recurringSubscriptionInfo_numberOfPayments"
                     name="recurringSubscriptionInfo_numberOfPayments" value="0" />
              <input type="hidden" id="shipTo_firstName" name="shipTo_firstName" value="Hans" />
              <input type="hidden" id="orderPage_colorScheme" name="orderPage_colorScheme" value="blue" />
              <input type="hidden" id="orderPage_receiptResponseURL" name="orderPage_receiptResponseURL"
                     value="sampleUrl" />
              <input type="hidden" id="billTo_postalCode" name="billTo_postalCode" value="1234" />
              <input type="hidden" id="orderPage_version" name="orderPage_version" value="7" />
              <input type="hidden" id="billTo_firstName" name="billTo_firstName" value="Hans" />
              <input type="hidden" id="orderPage_timestamp" name="orderPage_timestamp" value="1682004248861" />
              <input type="hidden" id="billTo_state" name="billTo_state" value="" />
              <input type="hidden" id="recurringSubscriptionInfo_amount" name="recurringSubscriptionInfo_amount"
                     value="0" />
              <input type="hidden" id="merchantID" name="merchantID" value="your_merchant_id" />
              <input type="hidden" id="card_expirationYear" name="card_expirationYear" value="2027" />
              <input type="hidden" id="billTo_phoneNumber" name="billTo_phoneNumber" value="435345345" />
              <input type="hidden" id="paySubscriptionCreateReply_subscriptionIDPublicSignature"
                     name="paySubscriptionCreateReply_subscriptionIDPublicSignature"
                     value="mjkA+UiBJyPLF0KQZLxzie0yXuc=" />
            </dl>
          </div>
        </form>
      </div>
    </div>
    <div style="clear: both;"></div>
    <div id="footer">
    </div>
  </div>
</div>
</body>
</html>`;
};
