import { Occ } from '@spartacus/core';
import Currency = Occ.Currency;

export const getCurrency = (isocode: string, name: string, symbol: string): Currency => {
  return {
    active: true,
    isocode,
    name,
    symbol
  }
}

export const currencies = () => {
  return {
    currencies: [
      getCurrency('USD', 'US Dollar', '$'),
      getCurrency('CHF', 'Swiss Franc', 'CHF'),
    ]
  };
};
