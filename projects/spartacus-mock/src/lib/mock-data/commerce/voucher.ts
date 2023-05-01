import { faker } from '@faker-js/faker';
import { Voucher } from '@spartacus/cart/base/root';
import { LOCAL_STORAGE_KEY, LocalStorageMockData } from '../../types';
import { createCurrency } from '../general/currencies';
import { Occ } from '@spartacus/core';

export const createVoucher = (additionalData?: Occ.Voucher): Occ.Voucher => {
  return {
    code: faker.datatype.uuid(),
    currency: createCurrency(),
    description: faker.lorem.paragraphs(1),
    freeShipping: faker.datatype.boolean(),
    name: faker.lorem.words(4),
    value: 0,
    valueFormatted: 'USD 0.00',
    valueString: '0',
    voucherCode: faker.random.numeric(10),
    ...additionalData,
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
