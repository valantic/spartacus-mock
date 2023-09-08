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
    // override default chunks with potential custom chunks provided in the config
    ...customChunksEn,

    // core translations
    ...mergeDeep(translations['en'], customChunksEn),

    // feature library cart
    ...mergeDeep(cartBaseTranslations['en'], customChunksEn),
    ...mergeDeep(importExportTranslations['en'], customChunksEn),
    ...mergeDeep(quickOrderTranslations['en'], customChunksEn),
    ...mergeDeep(savedCartTranslations['en'], customChunksEn),
    ...mergeDeep(wishListTranslations['en'], customChunksEn),

    // feature library product
    ...mergeDeep(productImageZoomTranslations['en'], customChunksEn),
    ...mergeDeep(bulkPricingTranslations['en'], customChunksEn),
    ...mergeDeep(productVariantsTranslations['en'], customChunksEn),

    // feature library store finder
    ...mergeDeep(storeFinderTranslations['en'], customChunksEn),

    // feature library user
    ...mergeDeep(userAccountTranslations['en'], customChunksEn),
    ...mergeDeep(userProfileTranslations['en'], customChunksEn),

    // feature library checkout
    ...mergeDeep(checkoutTranslations['en'], customChunksEn),
    ...mergeDeep(checkoutB2BTranslations['en'], customChunksEn),

    // feature library order
    ...mergeDeep(orderTranslations['en'], customChunksEn),

    // feature library asm
    ...mergeDeep(asmTranslations['en'], customChunksEn),

    // feature library configurator
    ...mergeDeep(configuratorTranslations['en'], customChunksEn),

    // feature library customer ticketing
    ...mergeDeep(customerTicketingTranslations['en'], customChunksEn),

    // feature library organization
    ...mergeDeep(accountSummaryTranslations['en'], customChunksEn),
    ...mergeDeep(organizationTranslations['en'], customChunksEn),
    ...mergeDeep(orderApprovalTranslations['en'], customChunksEn),
    ...mergeDeep(unitOrderTranslations['en'], customChunksEn),
    ...mergeDeep(organizationUserRegistrationTranslations['en'], customChunksEn),

    // other feature libraries
    ...mergeDeep(dpTranslations['en'], customChunksEn),
    ...mergeDeep(epdVisualizationTranslations['en'], customChunksEn),
    ...mergeDeep(s4omTranslations['en'], customChunksEn),
  };
};

/**
 * Shows if the given item is of type object.
 */
function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merges the translation chunks that allows to only overwrite certain translation keys.
 *
 * @param defaultChunk Default Core Translation Chunk
 * @param customChunk Custom Translations (All Chunks)
 */
function mergeDeep(defaultChunk: object, customChunk: object): object {
  let output: { [key: string]: any } = Object.assign({}, defaultChunk);

  if (isObject(defaultChunk) && isObject(customChunk)) {
    Object.keys(customChunk).forEach((key: string) => {
      if (isObject(customChunk[key as keyof typeof customChunk])) {
        if (key in defaultChunk) {
          output[key] = mergeDeep(
            defaultChunk[key as keyof typeof defaultChunk],
            customChunk[key as keyof typeof customChunk]
          );
        }
      } else {
        Object.assign(output, { [key]: customChunk[key as keyof typeof customChunk] });
      }
    });
  }

  return output;
}
