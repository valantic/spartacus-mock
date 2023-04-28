import { Occ } from '@spartacus/core';
import { createLanguage, languages } from '../languages';
import { createCurrency, currencies } from '../general/currencies';

export const createBaseStore = (additionalData?: Occ.BaseStore): Occ.BaseStore => {
  return {
    currencies: currencies().currencies,
    defaultCurrency: createCurrency(),
    languages: languages().languages,
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
