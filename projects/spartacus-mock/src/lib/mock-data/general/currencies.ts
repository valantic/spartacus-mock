import { Occ } from '@spartacus/core';

export const createCurrency = (additionalData?: Occ.Currency): Occ.Currency => {
  return {
    active: true,
    isocode: 'USD',
    name: 'US Dollar',
    symbol: '$',
    ...additionalData,
  };
};

export const currencies = (): Occ.CurrencyList => {
  return {
    currencies: [
      createCurrency(),
      createCurrency({
        isocode: 'EUR',
        name: 'Euro',
        symbol: '€',
      }),
      createCurrency({
        isocode: 'CHF',
        name: 'Schweizer Franken',
        symbol: 'CHF',
      }),
    ],
  };
};
