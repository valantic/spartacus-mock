import { LOCAL_STORAGE_KEY, LocalStorageMockData, MockConfig } from './types';

export function createLocalstorage(_config: MockConfig) {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  if (!mockData.activeCartEntries) {
    mockData.activeCartEntries = [];
  }

  if (!mockData.activeVouchers) {
    mockData.activeVouchers = [];
  }

  if (!mockData.isGuestCheckout) {
    mockData.isGuestCheckout = false;
  }

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
}
