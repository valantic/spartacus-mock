import { MockRequest } from '@valantic/spartacus-mock';

export const passThroughRequests: MockRequest[] = [
  // app specific asset requests should be ignored by the mock server
  // TODO adjust to your needs
  { url: '/assets/*', requestFunction: 'get' },
  { url: '*.woff2', requestFunction: 'get' },
  { url: '*.woff', requestFunction: 'get' },
  { url: '*.svg', requestFunction: 'get' },
  { url: '*.xml', requestFunction: 'get' },
  { url: '*.html', requestFunction: 'get' },
  { url: '*.json', requestFunction: 'get' },
  { url: '*.js', requestFunction: 'get' },
  { url: '/favicon.ico', requestFunction: 'get' },
  { url: '*.css', requestFunction: 'get' },
  { url: '*.webp', requestFunction: 'get' },
  { url: '/site.webmanifest', requestFunction: 'get' },
  { url: '/common.js', requestFunction: 'get' },
  { url: '/locale-*', requestFunction: 'get' },

  // 3rd party requests should be ignored by the mock server
  // TODO adjust to your needs
  { url: 'https://www.googletagmanager.com/*', requestFunction: 'get' },
  { url: 'https://*.analytics.google.com/*', requestFunction: 'post' },

  // uncomment to use the real backend for login
  // { url: '/authorizationserver/oauth/*', requestFunction: 'post' },
];
