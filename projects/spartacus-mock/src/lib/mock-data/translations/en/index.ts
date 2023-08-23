import { asmTranslations } from '@spartacus/asm/assets';
import { translations } from '@spartacus/assets';
import { cartBaseTranslations } from '@spartacus/cart/base/assets';
import { importExportTranslations } from '@spartacus/cart/import-export/assets';
import { quickOrderTranslations } from '@spartacus/cart/quick-order/assets';
import { savedCartTranslations } from '@spartacus/cart/saved-cart/assets';
import { wishListTranslations } from '@spartacus/cart/wish-list/assets';
import { checkoutB2BTranslations } from '@spartacus/checkout/b2b/assets';
import { checkoutTranslations } from '@spartacus/checkout/base/assets';
import { customerTicketingTranslations } from '@spartacus/customer-ticketing/assets';
import { dpTranslations } from '@spartacus/digital-payments/assets';
import { epdVisualizationTranslations } from '@spartacus/epd-visualization/assets';
import { orderTranslations } from '@spartacus/order/assets';
import { accountSummaryTranslations } from '@spartacus/organization/account-summary/assets';
import { organizationTranslations } from '@spartacus/organization/administration/assets';
import { orderApprovalTranslations } from '@spartacus/organization/order-approval/assets';
import { unitOrderTranslations } from '@spartacus/organization/unit-order/assets';
import { organizationUserRegistrationTranslations } from '@spartacus/organization/user-registration/assets';
import { configuratorTranslations } from '@spartacus/product-configurator/common/assets';
import { bulkPricingTranslations } from '@spartacus/product/bulk-pricing/assets';
import { productImageZoomTranslations } from '@spartacus/product/image-zoom/assets';
import { productVariantsTranslations } from '@spartacus/product/variants/assets';
import { s4omTranslations } from '@spartacus/s4om/assets';
import { storeFinderTranslations } from '@spartacus/storefinder/assets';
import { userAccountTranslations } from '@spartacus/user/account/assets';
import { userProfileTranslations } from '@spartacus/user/profile/assets';
import { TranslationChunks } from '../../../types';

export const languageEn = (customChunksEn: TranslationChunks) => {
  return {
    ...translations['en'],

    // feature library cart
    ...cartBaseTranslations['en'],
    ...importExportTranslations['en'],
    ...quickOrderTranslations['en'],
    ...savedCartTranslations['en'],
    ...wishListTranslations['en'],

    // feature library product
    ...productImageZoomTranslations['en'],
    ...bulkPricingTranslations['en'],
    ...productVariantsTranslations['en'],

    // feature library store finder
    ...storeFinderTranslations['en'],

    // feature library user
    ...userAccountTranslations['en'],
    ...userProfileTranslations['en'],

    // feature library checkout
    ...checkoutTranslations['en'],
    ...checkoutB2BTranslations['en'],

    // feature library order
    ...orderTranslations['en'],

    // feature library asm
    ...asmTranslations['en'],

    // feature library configurator
    ...configuratorTranslations['en'],

    ...customerTicketingTranslations['en'],

    // feature library organization
    ...accountSummaryTranslations['en'],
    ...organizationTranslations['en'],
    ...orderApprovalTranslations['en'],
    ...unitOrderTranslations['en'],
    ...organizationUserRegistrationTranslations['en'],

    // other feature libraries
    ...dpTranslations['en'],
    ...epdVisualizationTranslations['en'],
    ...s4omTranslations['en'],

    // override default chunks with potential custom chunks provided in the config
    ...customChunksEn,
  };
};
