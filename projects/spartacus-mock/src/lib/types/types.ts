import { RestHandler } from 'msw';
import { Voucher } from '@spartacus/cart/base/root';
import { BackendConfig, Occ, OccConfig, Page as SpartacusPage } from '@spartacus/core';
import { TranslationResources } from '@spartacus/core/src/i18n/translation-resources';

declare module '@spartacus/core' {
  namespace Occ {
    interface Component {
      uuid?: string;
      linkName?: string;
      url?: string;
      target?: string;
      external?: boolean;
      contentPage?: string;
      contentPageLabelOrId?: string;
      [key: string]: string | boolean | object | undefined;
    }

    interface ContentSlot {
      slotUuid?: string;
    }
  }
}

export interface Pages {
  [key: string]: Occ.CMSPage;
}

export interface ActiveCartEntry {
  code: string;
  quantity: number;
}

export interface LocalStorageMockData {
  activeCartEntries: ActiveCartEntry[];
  activeVouchers: Voucher[];
  isGuestCheckout: boolean;
}

export const LOCAL_STORAGE_KEY = 'spartacus⚿⚿mock-data';

export interface Page extends SpartacusPage {
  uid?: string;
  uuid?: string;
}

export interface ContentSlot extends Occ.ContentSlot {
  slotId?: string;
  slotUuid?: string;
}

export interface Component extends Occ.Component {
  uuid: string;
  [key: string]: string | boolean | object | undefined;
}

export interface CmsComponentAdditionalData {
  [key: string]: string | boolean | object | undefined;
}

export interface ContentPages {
  [key: string]: Page;
}

export interface Environment extends OccConfig {
  backend: BackendConfig;
}

export interface MockRequest {
  url: string;
  requestFunction: 'get' | 'post' | 'put' | 'delete' | 'head';
}

export interface MockConfig {
  enableWorker: boolean;
  environment: Environment;
  passThroughRequests?: MockRequest[];
  handlers?: RestHandler[];
  contentPages?: ContentPages;
  productDetailPage?: Page;
  productCategoryPage?: Page;
  homePage?: Page;
  customSlots?: Occ.ContentSlot[];
  disableDefaultData?: boolean;
  translations?: TranslationResources;
  mockedRequests?: MockRequest[];
  mockedPageIds?: string[];
  debug?: boolean;

  // TODO Components Call Handler Options
}

export interface ProductSearchPageModifier {
  query?: string;
  pageSize?: number;
  sort?: string;
  currentPage?: number;
}

export interface SearchStateModifier {
  query?: string;
  activeSort?: string;
}

export interface FacetValueModifier extends SearchStateModifier {}

export interface ProductReferenceListModifier {
  referenceType?: string;
}

export interface ImageModifier {
  width?: number;
  height?: number;
}

export interface PriceModifier {
  value?: number;
}

export interface TranslationChunks {
  address?: object;
  common?: object;
  myAccount?: object;
  payment?: object;
  product?: object;
  pwa?: object;
  user?: object;
  video?: object;
  pdf?: object;

  cart?: object;
  importExport?: object;
  quickOrder?: object;
  savedCart?: object;
  wishlist?: object;
  checkout?: object;
  order?: object;
  bulkPricing?: object;
  productImageZoom?: object;
  storeFinder?: object;
  userAccount?: object;
  userProfile?: object;
}
