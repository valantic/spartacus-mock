export const baseSites = () => {
  return {
    baseSites: [
      {
        defaultLanguage: { isocode: 'en' },
        stores: [
          {
            currencies: [{ isocode: 'USD' }, { isocode: 'CHF' }],
            defaultCurrency: { isocode: 'USD' },
            defaultLanguage: { isocode: 'en' },
            languages: [{ isocode: 'en' }, { isocode: 'de' }, { isocode: 'fr' }, { isocode: 'it' }],
          },
        ],
        uid: 'electronics-spa',
        urlEncodingAttributes: ['storefront', 'language', 'currency'],
        urlPatterns: [
          '(?i)^https?://[^/]+(/[^?]*)?\\?(.*\\&)?(site=electronics-spa)(|\\&.*)$',
          '(?i)^https?://electronics-spa\\.[^/]+(|/.*|\\?.*)$',
          '(?i)^https?://api\\.hybrisdev\\.com(:[\\d]+)?/rest/.*$',
          '(?i)^https?://localhost(:[\\d]+)?/rest/.*$',
          '(?i)^https?://localhost(:[\\d]+)?(|/.*|\\?.*)$',
          '(?i)^https?://[^/]+/electronics-spa(|/.|\\?.)$',
          '(?i)^https?://[^/]+/electronics-spa(|/.*|\\?.*)$',
        ],
      },
    ],
  };
};
