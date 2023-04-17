import { LOCAL_STORAGE_KEY, LocalStorageMockData } from '../../types';
import { faker } from '@faker-js/faker';
import { Voucher } from '@spartacus/cart/base/root';
import { getCurrency } from '../general/currencies';

export const createVoucher = (code?: string, name?: string, description?: string) => {
  return {
    code: code || faker.datatype.uuid(),
    currency: getCurrency('USD', 'US Dollar', '$'),
    description: description || faker.lorem.paragraphs(1),
    freeShipping: faker.datatype.boolean(),
    name: name || faker.lorem.words(4),
    value: 0,
    valueFormatted: 'CHF 0.00',
    valueString: '0',
    voucherCode: code,
  };
};

export const addVoucher = (voucherId: string) => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  mockData.activeVouchers.push({
    code: voucherId,
    voucherCode: voucherId,
  });

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
};

export const deleteVoucher = (voucherCode: string) => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  mockData = {
    ...mockData,
    activeVouchers: mockData.activeVouchers.filter((voucher: Voucher) => {
      return voucher.code !== voucherCode;
    }),
  };

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
};
