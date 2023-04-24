import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { product } from './product';

const DEFAULT_SORT = 'relevance';
const CATEGORY_QUERY = ':allCategories:';

export const productSearch = (
  query: string,
  pageSize: number,
  sort: string,
  currentPage: number,
  isTypeAhead: boolean
): Occ.ProductSearchPage => {
  const numberOfResults = faker.datatype.number({ min: 1, max: 99 });
  const numberOfPages = Math.ceil(numberOfResults / pageSize);
  const activeSort = sort !== '' ? sort : DEFAULT_SORT;
  const products = new Array(faker.datatype.number(pageSize))
    .fill(null)
    .map((value, index) => product(faker.datatype.number({ min: 10000, max: 99999 }).toString(), index));

  const result: Occ.ProductSearchPage = {
    // @ts-ignore
    type: 'productCategorySearchPageWsDTO',
    breadcrumbs: [],
    currentQuery: {
      query: {
        value: `${query}:${activeSort}`,
      },
      url: `/search?q=${query}%3A${activeSort}`,
    },
    facets: [
      {
        category: false,
        multiSelect: true,
        name: 'Stores',
        priority: 2147483647,
        values: [
          {
            count: 51,
            name: 'Chiba',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Chiba`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 41,
            name: 'Choshi',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Choshi`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 49,
            name: 'Fukuoka Best Western Fukuoka Nakasu Inn',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Fukuoka+Best+Western+Fukuoka+Nakasu+Inn`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 46,
            name: 'Fukuoka Canal City Fukuoka Washington Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Fukuoka+Canal+City+Fukuoka+Washington+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 44,
            name: 'Fukuoka Hilton Fukuoka Sea Hawk',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Fukuoka+Hilton+Fukuoka+Sea+Hawk`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 47,
            name: 'Fukuoka Hotel Monterey La Soeur Fukuoka',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Fukuoka+Hotel+Monterey+La+Soeur+Fukuoka`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 44,
            name: 'Fukuoka Hotel Nikko Fukuoka',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Fukuoka+Hotel+Nikko+Fukuoka`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 60,
            name: 'Ichikawa',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Ichikawa`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 47,
            name: 'Kawasaki Grand Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kawasaki+Grand+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 43,
            name: 'Kawasaki Hotel Sunroute Kawasaki',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kawasaki+Hotel+Sunroute+Kawasaki`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 49,
            name: 'Kawasaki Mets Kawasaki Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kawasaki+Mets+Kawasaki+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 59,
            name: 'Kawasaki Mets Mizonokuchi Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kawasaki+Mets+Mizonokuchi+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 49,
            name: 'Kawasaki Pearl Hotel Kawasaki',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kawasaki+Pearl+Hotel+Kawasaki`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 45,
            name: 'Kobe Bay Sheraton Hotel and Towers',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kobe+Bay+Sheraton+Hotel+and+Towers`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 34,
            name: 'Kobe Hotel Monterey Amalie',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kobe+Hotel+Monterey+Amalie`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 27,
            name: 'Kobe Hotel Monterey Kobe',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kobe+Hotel+Monterey+Kobe`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 63,
            name: 'Kobe Sannomiya Terminal Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kobe+Sannomiya+Terminal+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 30,
            name: 'Kobe the b',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Kobe+the+b`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 53,
            name: 'Koto',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Koto`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 47,
            name: 'Matsudo',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Matsudo`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 42,
            name: 'Misato',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Misato`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 50,
            name: 'Nagoya Crowne Plaza Ana Grand Court Nagoya',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Nagoya+Crowne+Plaza+Ana+Grand+Court+Nagoya`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 48,
            name: 'Nagoya Hilton Nagoya Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Nagoya+Hilton+Nagoya+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 55,
            name: 'Nagoya Marriott Nagoya',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Nagoya+Marriott+Nagoya`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 48,
            name: 'Nagoya Royal Park Inn Nagoya',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Nagoya+Royal+Park+Inn+Nagoya`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 49,
            name: 'Nagoya The Westin Nagoya Castle',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Nagoya+The+Westin+Nagoya+Castle`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 80,
            name: 'Nakano',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Nakano`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 46,
            name: 'Osaka Best Western Hotel Fino Osaka Shinsaibashi',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Osaka+Best+Western+Hotel+Fino+Osaka+Shinsaibashi`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 46,
            name: 'Osaka Cross Hotel Osaka',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Osaka+Cross+Hotel+Osaka`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 52,
            name: 'Osaka Crowne Plaza Hotel Ana Osaka',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Osaka+Crowne+Plaza+Hotel+Ana+Osaka`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 47,
            name: 'Osaka Hilton Osaka Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Osaka+Hilton+Osaka+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 50,
            name: 'Osaka Ramada Osaka',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Osaka+Ramada+Osaka`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 61,
            name: 'Sapporo Ana Hotel Sapporo',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Sapporo+Ana+Hotel+Sapporo`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 46,
            name: 'Sapporo Best Western Hotel Sapporo Nakajima Koen',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Sapporo+Best+Western+Hotel+Sapporo+Nakajima+Koen`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 52,
            name: 'Sapporo Hotel Resol Trinity Sapporo',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Sapporo+Hotel+Resol+Trinity+Sapporo`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 44,
            name: 'Sapporo Hotel Sunroute Sapporo',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Sapporo+Hotel+Sunroute+Sapporo`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 52,
            name: 'Sapporo Sheraton Sapporo Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Sapporo+Sheraton+Sapporo+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 55,
            name: 'Shinbashi',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Shinbashi`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 48,
            name: 'Tokio Cerulean Tower Tokyu Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Tokio+Cerulean+Tower+Tokyu+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 49,
            name: 'Tokio Dormy Inn Tokyo Hatchobori',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Tokio+Dormy+Inn+Tokyo+Hatchobori`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 63,
            name: 'Tokio Flexstay Nippori Inn',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Tokio+Flexstay+Nippori+Inn`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 43,
            name: 'Tokio Hotel Metropolitan Tokyo',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Tokio+Hotel+Metropolitan+Tokyo`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 51,
            name: 'Tokio Park Hotel Tokyo',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Tokio+Park+Hotel+Tokyo`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 45,
            name: 'Yokohama Comfort Hotel Yokohama Kannai',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Yokohama+Comfort+Hotel+Yokohama+Kannai`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 46,
            name: 'Yokohama Hotel JAL City Kannai Yokohama',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Yokohama+Hotel+JAL+City+Kannai+Yokohama`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 58,
            name: 'Yokohama Hotel New Grand',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Yokohama+Hotel+New+Grand`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 48,
            name: 'Yokohama Sakuragicho Washington Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Yokohama+Sakuragicho+Washington+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 49,
            name: 'Yokohama Shin Yokohama Prince Hotel',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Yokohama+Shin+Yokohama+Prince+Hotel`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 47,
            name: 'Yokosuka',
            query: {
              query: {
                value: `${query}:${activeSort}:availableInStores:Yokosuka`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: false,
        multiSelect: true,
        name: 'Price',
        priority: 2147483646,
        values: [
          {
            count: 14,
            name: '$0-$49.99',
            query: {
              query: {
                value: `${query}:${activeSort}:price:%240-%2449.99`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 29,
            name: '$50-$199.99',
            query: {
              query: {
                value: `${query}:${activeSort}:price:%2450-%24199.99`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 18,
            name: '$200-$499.99',
            query: {
              query: {
                value: `${query}:${activeSort}:price:%24200-%24499.99`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 14,
            name: '$500-$999.99',
            query: {
              query: {
                value: `${query}:${activeSort}:price:%24500-%24999.99`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 15,
            name: '$1,000-$100,000',
            query: {
              query: {
                value: `${query}:${activeSort}:price:%241%2C000-%24100%2C000`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: false,
        multiSelect: false,
        name: 'Resolution',
        priority: 2147483644,
        values: [
          {
            count: 1,
            name: '1280 × 720',
            query: {
              query: {
                value: `${query}:${activeSort}:Resolution, 80:1280+%C3%97+720`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: false,
        multiSelect: false,
        name: 'Mounting',
        priority: 2147483643,
        values: [
          {
            count: 2,
            name: 'Floor-standing',
            query: {
              query: {
                value: `${query}:${activeSort}:Mounting, 1867:Floor-standing`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Quick-release Mounting Shoe',
            query: {
              query: {
                value: `${query}:${activeSort}:Mounting, 1867:Quick-release+Mounting+Shoe`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: false,
        multiSelect: true,
        name: 'Megapixels',
        priority: 2147483642,
        values: [
          {
            count: 1,
            name: '20 - 29.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:20+-+29.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 8,
            name: '15 - 15.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:15+-+15.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 3,
            name: '14 - 14.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:14+-+14.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 4,
            name: '12 - 12.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:12+-+12.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 18,
            name: '10 - 10.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:10+-+10.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: '9 - 9.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:9+-+9.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 3,
            name: '8 - 8.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:8+-+8.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: '7 - 7.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:7+-+7.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 2,
            name: '5 - 5.9 mp',
            query: {
              query: {
                value: `${query}:${activeSort}:Megapixel, 63:5+-+5.9+mp`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: false,
        multiSelect: true,
        name: 'Lens type',
        priority: 2147483641,
        values: [
          {
            count: 5,
            name: 'fixed',
            query: {
              query: {
                value: `${query}:${activeSort}:Lens type, 472:fixed`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'fisheye',
            query: {
              query: {
                value: `${query}:${activeSort}:Lens type, 472:fisheye`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'telephoto',
            query: {
              query: {
                value: `${query}:${activeSort}:Lens type, 472:telephoto`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'wide-angle',
            query: {
              query: {
                value: `${query}:${activeSort}:Lens type, 472:wide-angle`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: false,
        multiSelect: true,
        name: 'Color',
        priority: 2147483640,
        values: [
          {
            count: 5,
            name: 'Black',
            query: {
              query: {
                value: `${query}:${activeSort}:Colour of product, 1766:Black`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: true,
        multiSelect: false,
        name: 'Brand',
        priority: 2147483638,
        values: [
          {
            count: 32,
            name: 'Sony',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_5`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 25,
            name: 'Canon',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_10`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 14,
            name: 'Kodak',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_88`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 7,
            name: 'Kingston',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_18`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 6,
            name: 'Samsung',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_26`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'HP',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_1`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Toshiba',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_2`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'TDK',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_251`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Canyon',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_745`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Fujifilm',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_75`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Logitech',
            query: {
              query: {
                value: `${query}:${activeSort}:brand:brand_91`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
        ],
        visible: true,
      },
      {
        category: true,
        multiSelect: false,
        name: 'Category',
        priority: 2147483635,
        values: [
          {
            count: 73,
            name: 'Cameras',
            query: {
              query: {
                value: `${query}:${activeSort}:category:571`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 59,
            name: 'Digital Cameras',
            query: {
              query: {
                value: `${query}:${activeSort}:category:575`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 33,
            name: 'Digital SLR',
            query: {
              query: {
                value: `${query}:${activeSort}:category:578`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 26,
            name: 'Digital Compacts',
            query: {
              query: {
                value: `${query}:${activeSort}:category:576`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 8,
            name: 'Data storage',
            query: {
              query: {
                value: `${query}:${activeSort}:category:206`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 8,
            name: 'Camera Accessories & Supplies',
            query: {
              query: {
                value: `${query}:${activeSort}:category:585`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 8,
            name: 'Flash Memory',
            query: {
              query: {
                value: `${query}:${activeSort}:category:902`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 7,
            name: 'Components',
            query: {
              query: {
                value: `${query}:${activeSort}:category:106`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 7,
            name: 'Camera Lenses',
            query: {
              query: {
                value: `${query}:${activeSort}:category:588`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 7,
            name: 'Power Supplies',
            query: {
              query: {
                value: `${query}:${activeSort}:category:816`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 5,
            name: 'Tripods',
            query: {
              query: {
                value: `${query}:${activeSort}:category:587`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 5,
            name: 'Rechargeable Batteries',
            query: {
              query: {
                value: `${query}:${activeSort}:category:814`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 4,
            name: 'Black & White Films',
            query: {
              query: {
                value: `${query}:${activeSort}:category:598`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 3,
            name: 'Camera Kits',
            query: {
              query: {
                value: `${query}:${activeSort}:category:1288`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 2,
            name: 'Binoculars',
            query: {
              query: {
                value: `${query}:${activeSort}:category:1421`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 2,
            name: 'Film cameras',
            query: {
              query: {
                value: `${query}:${activeSort}:category:574`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 2,
            name: 'Webcams',
            query: {
              query: {
                value: `${query}:${activeSort}:category:577`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 2,
            name: 'Hand-held Camcorders',
            query: {
              query: {
                value: `${query}:${activeSort}:category:584`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 2,
            name: 'Blank Video Tapes',
            query: {
              query: {
                value: `${query}:${activeSort}:category:604`,
              },
              url: `/search?q=${query}%3A${activeSort}%3AavailableInStores%3AChoshi`,
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Camera Flashes',
            query: {
              query: {
                value: `${query}:${activeSort}:category:586`,
              },
              url: '/search?q=Test%3Arelevance%3Acategory%3A586',
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Power Adapters & Inverters',
            query: {
              query: {
                value: `${query}:${activeSort}:category:827`,
              },
              url: '/search?q=Test%3Arelevance%3Acategory%3A827',
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Battery Chargers',
            query: {
              query: {
                value: `${query}:${activeSort}:category:829`,
              },
              url: '/search?q=Test%3Arelevance%3Acategory%3A829',
            },
            selected: false,
          },
          {
            count: 1,
            name: 'Camera Cables',
            query: {
              query: {
                value: `${query}:${activeSort}:category:934`,
              },
              url: '/search?q=Test%3Arelevance%3Acategory%3A934',
            },
            selected: false,
          },
        ],
        visible: true,
      },
    ],
    freeTextSearch: query,
    pagination: {
      currentPage,
      pageSize: pageSize,
      sort: activeSort,
      totalPages: numberOfPages,
      totalResults: numberOfResults,
    },
    products,
    sorts: [
      {
        code: 'relevance',
        name: 'Relevance',
        selected: sort === 'relevance',
      },
      {
        code: 'topRated',
        name: 'Top Rated',
        selected: sort === 'topRated',
      },
      {
        code: 'name-asc',
        name: 'Name (ascending)',
        selected: sort === 'name-asc',
      },
      {
        code: 'name-desc',
        name: 'Name (descending)',
        selected: sort === 'name-desc',
      },
      {
        code: 'price-asc',
        name: 'Price (lowest first)',
        selected: sort === 'price-asc',
      },
      {
        code: 'price-desc',
        name: 'Price (highest first)',
        selected: sort === 'price-desc',
      },
    ],
  };

  if (query.indexOf(CATEGORY_QUERY) > -1) {
    const categoryCode = query.split(CATEGORY_QUERY)[1];
    const categoryName = faker.commerce.productName();

    result.freeTextSearch = '';

    result.currentQuery = {
      query: {
        value: `:${activeSort}:allCategories:${categoryCode}`,
      },
      url: `/search?q=%3A${activeSort}%3AallCategories%3A${categoryCode}`,
    };

    result.breadcrumbs = [
      {
        facetCode: 'allCategories',
        facetName: 'allCategories',
        facetValueCode: categoryCode,
        facetValueName: categoryName,
        removeQuery: {
          query: {
            value: `:${activeSort}`,
          },
          url: `/search?q=%3A${activeSort}`,
        },
      },
    ];
  }

  return result;
};
