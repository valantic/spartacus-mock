import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createAddress } from '../account';
import { countryList, createCountry } from '../general';
import { image } from '../media';

export const createStoreCount = (additionalData?: Occ.StoreCount): Occ.StoreCount => {
  return {
    count: faker.datatype.number({ min: 1, max: 15 }),
    isoCode: faker.address.countryCode(),
    name: faker.address.country(),
    type: 'COUNTRY',
    ...additionalData,
  };
};

export const storesAndRegionsStoreCount = (): Occ.StoreCountList => {
  return {
    countriesAndRegionsStoreCount: countryList().countries?.map((country) =>
      createStoreCount({ isoCode: country.isocode, name: country.name })
    ),
  };
};

export const createTime = (additionalData?: Occ.Time): Occ.Time => {
  const date = faker.date.future();

  return {
    formattedHour: `${date.getHours()}:${date.getMinutes()} Uhr`,
    hour: date.getHours(),
    minute: date.getMinutes(),
    ...additionalData,
  };
};

export const createSpecialOpeningDay = (additionalData?: Occ.SpecialOpeningDay): Occ.SpecialOpeningDay => {
  const date = faker.date.future();

  return {
    closed: faker.datatype.boolean(),
    closingTime: createTime(),
    comment: faker.lorem.sentences(2),
    date,
    formattedDate: date.toDateString(),
    name: faker.lorem.words(3),
    openingTime: createTime(),
    ...additionalData,
  };
};

export const createWeekdayOpeningDay = (additionalData?: Occ.WeekdayOpeningDay): Occ.WeekdayOpeningDay => {
  return {
    closed: faker.datatype.boolean(),
    closingTime: createTime(),
    openingTime: createTime(),
    weekDay: faker.date.weekday(),
    ...additionalData,
  };
};

export const createOpeningSchedule = (additionalData?: Occ.OpeningSchedule): Occ.OpeningSchedule => {
  return {
    code: faker.datatype.uuid(),
    name: faker.lorem.words(3),
    specialDayOpeningList: [createSpecialOpeningDay(), createSpecialOpeningDay()],
    weekDayOpeningList: [
      createWeekdayOpeningDay({ weekDay: 'Mo' }),
      createWeekdayOpeningDay({ weekDay: 'Di' }),
      createWeekdayOpeningDay({ weekDay: 'Mi' }),
      createWeekdayOpeningDay({ weekDay: 'Do' }),
      createWeekdayOpeningDay({ weekDay: 'Fr' }),
      createWeekdayOpeningDay({ weekDay: 'Sa', closed: true }),
      createWeekdayOpeningDay({ weekDay: 'So', closed: true }),
    ],
    ...additionalData,
  };
};

export const createPointOfService = (additionalData?: Occ.PointOfService): Occ.PointOfService => {
  const distanceKm = faker.datatype.number({ min: 1, max: 9999 });

  return {
    address: createAddress(),
    description: faker.lorem.sentences(3),
    displayName: faker.company.name(),
    distanceKm,
    features: undefined,
    formattedDistance: `${distanceKm}km`,
    geoPoint: {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    },
    mapIcon: image(),
    name: faker.company.name(),
    openingHours: createOpeningSchedule(),
    storeContent: '',
    storeImages: [image(), image(), image()],
    url: faker.internet.url(),
    ...additionalData,
  };
};

export const storeFinderSearchPage = (additionalData?: Occ.StoreFinderSearchPage): Occ.StoreFinderSearchPage => {
  const storesCount = storesAndRegionsStoreCount().countriesAndRegionsStoreCount;
  const stores: Occ.PointOfService[] = [];

  storesCount?.forEach((storeCount) => {
    const pointOfServicesForCountry = new Array(storeCount.count).fill(null).map(() => {
      return createPointOfService({
        address: createAddress({ country: createCountry({ isocode: storeCount.isoCode, name: storeCount.name }) }),
      });
    });

    stores.push(...pointOfServicesForCountry);
  });

  return {
    pagination: {
      currentPage: 0,
      pageSize: -1,
      sort: 'asc',
      totalPages: -88,
      totalResults: 88,
    },
    stores,
    ...additionalData,
  };
};
