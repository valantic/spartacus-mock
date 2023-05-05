import { PassThroughUrl } from './types';

/**
 * TODO refactor this to a service
 *
 * Returns the default pass through urls
 */
export const defaultPassThroughUrls: PassThroughUrl[] = [
  { url: '/assets/*', requestFunction: 'get' },
  { url: '*.woff2', requestFunction: 'get' },
  { url: '*.woff', requestFunction: 'get' },
  { url: '*.svg', requestFunction: 'get' },
  { url: '*.xml', requestFunction: 'get' },
  { url: '*.html', requestFunction: 'get' },
  { url: '*.json', requestFunction: 'get' },
  { url: '*.js', requestFunction: 'get' },
  { url: '*.css', requestFunction: 'get' },
  { url: '*.webp', requestFunction: 'get' },
  { url: '/manifest.webmanifest', requestFunction: 'get' },
  { url: '/favicon.ico', requestFunction: 'get' },
  { url: '/common.js', requestFunction: 'get' },
  { url: '*/users/anonymous/consenttemplates*', requestFunction: 'head' },
  { url: '*.analytics.google.com/*', requestFunction: 'post' },
  { url: 'https://www.googletagmanager.com/*', requestFunction: 'get' },
  { url: 'https://maps.gstatic.com/*', requestFunction: 'get' },
  { url: 'https://maps.googleapis.com/*', requestFunction: 'get' },
  { url: 'https://fonts.googleapis.com/*', requestFunction: 'get' },
];
