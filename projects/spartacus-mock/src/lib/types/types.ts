import { RestHandler } from 'msw';
import { BackendConfig, Occ, OccConfig, Page as SpartacusPage } from '@spartacus/core';
import { Voucher } from '@spartacus/cart/base/root';

export interface ActiveCartEntry {
  code: string;
  quantity: number;
}

export interface LocalStorageMockData {
  activeCartEntries: ActiveCartEntry[];
  activeVouchers: Voucher[];
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
  modifiedtime?: string;
  container?: string;

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
  homePage?: Page;
  headerSlots?: ContentSlot[];
  footerSlots?: ContentSlot[];

  // TODO Components Call Handler Options
}
