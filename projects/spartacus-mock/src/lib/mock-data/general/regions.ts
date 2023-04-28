import { Occ } from '@spartacus/core';

export const createRegion = (additionalData?: Occ.Region): Occ.Region => {
  return {
    countryIso: 'CH',
    isocode: 'SG',
    isocodeShort: 'SG',
    name: 'St. Gallen',
    ...additionalData,
  };
};

export const regions = (): Occ.RegionList => {
  return {
    regions: [
      createRegion(),
      createRegion({
        isocode: 'ZH',
        isocodeShort: 'ZH',
        name: 'Zürich',
      }),
      createRegion({
        isocode: 'BE',
        isocodeShort: 'BE',
        name: 'Bern',
      }),
      createRegion({
        isocode: 'TG',
        isocodeShort: 'TG',
        name: 'Thurgau',
      }),
    ],
  };
};
