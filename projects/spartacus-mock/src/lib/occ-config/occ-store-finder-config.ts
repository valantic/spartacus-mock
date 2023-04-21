import { OccConfig, OccEndpoints } from '@spartacus/core';

interface StoreFinderOccEndpoints extends OccEndpoints {
  store: string;
  stores: string;
  storescounts: string;
}

// needed to have a working typing
interface StoreFinderOccConfig extends OccConfig {
  backend: {
    occ: {
      endpoints: StoreFinderOccEndpoints;
    };
  };
}

export const occStoreFinderConfig: StoreFinderOccConfig = {
  backend: {
    occ: {
      endpoints: {
        // @ts-ignore
        store: 'stores/${storeId}?fields=FULL',
        stores:
          'stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)',
        storescounts: 'stores/storescounts',
      },
    },
  },
};
