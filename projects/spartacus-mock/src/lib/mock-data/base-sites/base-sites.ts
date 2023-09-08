import { Occ } from '@spartacus/core';
import { createCurrency, currencyList } from '../general';
import { createLanguage, languageList } from '../languages';

export const createBaseStore = (additionalData?: Occ.BaseStore): Occ.BaseStore => {
  return {
    currencies: currencyList().currencies,
    defaultCurrency: createCurrency(),
    languages: languageList().languages,
    defaultLanguage: createLanguage(),
    ...additionalData,
  };
};

export const createBaseSite = (additionalData?: Occ.BaseSite): Occ.BaseSite => {
  return {
    channel: '',
    defaultLanguage: createLanguage(),
    defaultPreviewCatalogId: '',
    defaultPreviewCategoryCode: '',
    defaultPreviewProductCode: '',
    locale: '',
    name: '',
    theme: '',
    uid: 'electronics-spa',
    stores: [createBaseStore()],
    urlPatterns: [
      '(?i)^https?://[^/]+(/[^?]*)?\\?(.*\\&)?(site=electronics-spa)(|\\&.*)$',
      '(?i)^https?://electronics-spa\\.[^/]+(|/.*|\\?.*)$',
      '(?i)^https?://api\\.hybrisdev\\.com(:[\\d]+)?/rest/.*$',
      '(?i)^https?://localhost(:[\\d]+)?/rest/.*$',
      '(?i)^https?://localhost(:[\\d]+)?(|/.*|\\?.*)$',
      '(?i)^https?://[^/]+/electronics-spa(|/.|\\?.)$',
      '(?i)^https?://[^/]+/electronics-spa(|/.*|\\?.*)$',
    ],
    urlEncodingAttributes: ['storefront', 'language', 'currency'],
    requiresAuthentication: false,
    ...additionalData,
  };
};

export const baseSites = (): Occ.BaseSites => {
  return {
    baseSites: [createBaseSite()],
  };
};
