# SpartacusMock

> This project is still in development and not ready for production use.

This project offers you the possibility, to mock the OCC Endpoint of your Spartacus Storefront. It uses the [Mock Service Worker](https://mswjs.io/) to mock the API calls.

## How to use

### Use the Default Mock Data for Spartacus Electronics Store

1. Install the Mock Service Worker: `npm i --save-dev msw`
2. Create the local service worker script: `npx msw init ./src --save`
3. Install it: `npm i @valantic/spartacus-mock`
4. Add the service worker script to the `angular.json` assets array: `"assets": ["src/mockServiceWorker.js"]`
5. Enhance your `environment.ts` with the information about your OCC Endpoint and the trigger to enable / disable the mock server:

```ts
export const environment = {
  mockServer: true,
  backend: {
    occ: {
      baseUrl:
        'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
      prefix: '/occ/v2/',
    },
  },
};
```

6. Adjust your `main.ts` file from

```ts
if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
```

To

```ts
const mockConfig: MockConfig = {
  enableWorker: environment.mockServer || false,
  environment,
};

if (document.readyState === 'complete') {
  prepareMock(mockConfig).then(() => bootstrap());
} else {
  document.addEventListener('DOMContentLoaded', () =>
    prepareMock(mockConfig).then(() => bootstrap())
  );
}
```

### Use your own Mock Data for your project

TODO

## GitHub issues

If you encounter a problem with this library or if you have a new feature you'd like to see in this project,
please create [a new issue](https://github.com/valantic/spartacus-mock/issues/new/choose).
