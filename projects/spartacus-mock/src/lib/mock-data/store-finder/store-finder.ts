import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { countryList } from '../general/countries';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const storesAndRegionsStoreCount = (): Occ.StoreCountList => {
  return {
    countriesAndRegionsStoreCount: countryList().countries?.map((country) => {
      return {
        count: faker.datatype.number({ min: 1, max: 15 }),
        isoCode: country.isocode,
        name: country.name,
        type: 'COUNTRY',
      } as Occ.StoreCount;
    }),
  };
};

const createFeatures = () => {
  return new Array(faker.datatype.number({ min: 1, max: 5 })).fill(null).map(() => {
    const feature = faker.company.catchPhraseAdjective();
    const featureKey = feature.toLowerCase().replace(' ', '-');
    return {
      key: featureKey,
      value: feature,
    };
  });
};

const createOpeningHours = (): object[] => {
  return new Array(7).fill(null).map((_value, index) => {
    const isClosed = faker.datatype.boolean();
    const hours = {
      closed: isClosed,
      weekDay: weekDays[index],
    };

    if (!isClosed) {
      const hourOpening = faker.datatype.number({ min: 8, max: 12 });
      const minuteOpening = faker.datatype.number({ min: 0, max: 60 });
      // @ts-ignore
      hours['openingTime'] = {
        formattedHour: `${hourOpening}:${minuteOpening} AM`,
        hour: hourOpening,
        minute: minuteOpening,
      };

      const hourClosing = faker.datatype.number({ min: 3, max: 6 });
      const minuteClosing = faker.datatype.number({ min: 0, max: 60 });
      // @ts-ignore
      hours['closingTime'] = {
        formattedHour: `${hourClosing}:${minuteClosing} PM`,
        hour: hourClosing,
        minute: minuteClosing,
      };
    }

    return hours;
  });
};

export const createPointOfService = (countryIsoCode?: string): Occ.PointOfService => {
  const name = faker.company.name();
  return {
    address: {
      country: {
        isocode: countryIsoCode || faker.address.countryCode('alpha-2'),
      },
      line1: faker.address.streetAddress(),
      phone: faker.phone.number(),
      town: faker.address.city(),
    },
    displayName: name,
    features: {
      // @ts-ignore
      entry: createFeatures(),
    },
    formattedDistance: `${faker.datatype.number({ min: 1, max: 999 })}km`,
    geoPoint: {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    },
    name: name,
    openingHours: {
      specialDayOpeningList: [],
      weekDayOpeningList: createOpeningHours(),
    },
  };
};

export const store = (): Occ.PointOfService => {
  return createPointOfService();
};

export const stores = (): object => {
  const storesCount = storesAndRegionsStoreCount().countriesAndRegionsStoreCount;
  const stores: Occ.PointOfService[] = [];

  storesCount?.forEach((storeCount) => {
    const pointOfServicesForCountry = new Array(storeCount.count).fill(null).map(() => {
      return createPointOfService(storeCount.isoCode || '');
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
  };
};
