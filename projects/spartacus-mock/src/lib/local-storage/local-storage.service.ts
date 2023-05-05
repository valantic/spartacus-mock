import { LOCAL_STORAGE_KEY, LocalStorageMockData, MockConfig } from '../types';

/**
 * The LocalStorageService is responsible for creating the local storage entry needed for the Spartacus Mock Server.
 */
export class LocalStorageService {
  constructor(protected config: MockConfig) {
    this.createLocalstorage(config);
  }

  /**
   * Update the local storage entry.
   * @param key
   * @param value
   */
  public updateLocalStorage(key: string, value: any): void {
    if (key && value) {
      let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

      // @ts-ignore
      mockData[key] = value;

      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
    }
  }

  /**
   * Create the local storage entries if they do not exist yet.
   * @param _config
   */
  private createLocalstorage(_config: MockConfig) {
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
}
