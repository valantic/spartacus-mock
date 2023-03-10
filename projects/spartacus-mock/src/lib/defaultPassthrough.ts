import { PassThroughUrl } from './types';

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
	{ url: '/site.webmanifest', requestFunction: 'get' },
	{ url: '/common.js', requestFunction: 'get' },
];
