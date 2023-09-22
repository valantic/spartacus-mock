import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { ProductSearchPageModifier, SearchStateModifier } from '../../types';
import { createSortModel } from '../general';
import { createPaginationModel } from '../general';
import { createFullProduct } from '../products';
import { createBreadcrumb } from './breadcrumb';
import { createFacet } from './facet';

const DEFAULT_SORT: string = 'relevance';
const CATEGORY_QUERY: string = ':allCategories:';

export const createSearchQuery = (): Occ.SearchQuery => {
  return {
    value: faker.commerce.productMaterial(),
  };
};

export const createSearchState = (
  additionalData?: Occ.SearchState,
  modifier?: SearchStateModifier
): Occ.SearchState => {
  return {
    query: modifier ? { value: `${modifier.query}:${modifier.activeSort}` } : createSearchQuery(),
    url: modifier ? `/search?q=${modifier.query}%3A${modifier.activeSort}` : faker.internet.url(),
    ...additionalData,
  };
};

export const createSpellingSuggestion = (additionalData?: Occ.SpellingSuggestion): Occ.SpellingSuggestion => {
  return {
    query: faker.lorem.words(3),
    suggestion: faker.commerce.productMaterial(),
    ...additionalData,
  };
};

export const productSearchPage = (
  additionalData?: Occ.ProductSearchPage,
  modifier?: ProductSearchPageModifier
): Occ.ProductSearchPage => {
  const numberOfResults = faker.number.int({ min: 1, max: 50 });
  const numberOfPages = Math.ceil(numberOfResults / (modifier?.pageSize || 1));

  const result: Occ.ProductSearchPage = {
    breadcrumbs: [createBreadcrumb(), createBreadcrumb(), createBreadcrumb()],
    categoryCode: faker.commerce.department(),
    currentQuery: createSearchState(
      undefined,
      modifier ? { query: modifier.query, activeSort: modifier?.sort || DEFAULT_SORT } : undefined
    ),
    facets: [createFacet(), createFacet({ multiSelect: true }), createFacet()],
    freeTextSearch: modifier?.query || '',
    keywordRedirectUrl: faker.internet.url(),
    pagination: createPaginationModel(
      modifier
        ? {
            currentPage: modifier.currentPage,
            pageSize: modifier.pageSize,
            sort: modifier.sort,
            totalPages: numberOfPages,
            totalResults: numberOfResults,
          }
        : undefined
    ),
    products: new Array(numberOfResults).fill(null).map(() => createFullProduct()),
    sorts: [
      createSortModel({ code: 'relevance', name: 'Relevance', selected: modifier?.sort === 'relevance' }),
      createSortModel({ code: 'topRated', name: 'Top Rated', selected: modifier?.sort === 'topRated' }),
      createSortModel({ code: 'name-asc', name: 'Name (ascending)', selected: modifier?.sort === 'name-asc' }),
      createSortModel({ code: 'name-desc', name: 'Name (descending)', selected: modifier?.sort === 'name-desc' }),
      createSortModel({ code: 'price-asc', name: 'Price (lowest first)', selected: modifier?.sort === 'price-asc' }),
      createSortModel({ code: 'price-desc', name: 'Price (highest first)', selected: modifier?.sort === 'price-desc' }),
    ],
    spellingSuggestion: createSpellingSuggestion(),
  };

  // Category Page Modifier
  if (modifier?.query?.includes(CATEGORY_QUERY)) {
    const categoryCode: string = modifier?.query.split(CATEGORY_QUERY)[1];
    const categoryName: string = faker.commerce.productName();

    result.freeTextSearch = '';

    result.currentQuery = createSearchState({
      query: {
        value: `:${modifier?.sort}:allCategories:${categoryCode}`,
      },
      url: `/search?q=%3A${modifier?.sort}%3AallCategories%3A${categoryCode}`,
    });

    result.breadcrumbs = [
      createBreadcrumb({
        facetCode: 'allCategories',
        facetName: 'allCategories',
        facetValueCode: categoryCode,
        facetValueName: categoryName,
        removeQuery: {
          query: {
            value: `:${modifier?.sort}`,
          },
          url: `/search?q=%3A${modifier?.sort}`,
        },
      }),
    ];
  }

  return {
    ...result,
    ...additionalData,
  };
};
