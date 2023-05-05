import { Occ } from '@spartacus/core';

export const createCountry = (additionalData?: Occ.Country): Occ.Country => {
  return {
    isocode: 'CH',
    name: 'Schweiz',
    ...additionalData,
  };
};

export const countryList = (): Occ.CountryList => {
  return {
    countries: [
      createCountry({
        isocode: 'CH',
        name: 'Switzerland',
      }),
      createCountry({
        isocode: 'DE',
        name: 'Germany',
      }),
      createCountry({
        isocode: 'FR',
        name: 'France',
      }),
      createCountry({
        isocode: 'IT',
        name: 'Italy',
      }),
    ],
  };
};
