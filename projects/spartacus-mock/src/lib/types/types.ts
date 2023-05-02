import { RestHandler } from 'msw';
import { Voucher } from '@spartacus/cart/base/root';
import { BackendConfig, Occ, OccConfig, Page as SpartacusPage } from '@spartacus/core';

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
  }
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

export interface PassThroughUrl {
  url: string;
  requestFunction: 'get' | 'post' | 'put' | 'delete' | 'head';
}

export interface MockConfig {
  enableWorker: boolean;
  environment: Environment;
  passThroughUrls?: PassThroughUrl[];
  handlers?: RestHandler[];
  contentPages?: ContentPages;
  productDetailPage?: Page;
  productCategoryPage?: Page;
  homePage?: Page;
  headerSlots?: ContentSlot[];
  footerSlots?: ContentSlot[];

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
