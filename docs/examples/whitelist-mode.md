# Whitelist Mode

Sometimes, you have an existing spartacus project, where you don't want or cannot add mock-data for everything.
Still it would be nice to quickly mock a page with a new component / a new endpoint. Don't worry, we have you covered:

#### Mock only certain endpoints

1. Add the property `disableDefaultData: true` to the mockConfig in your `main.ts` file
2. Follow the steps described in [Define Routes for Endpoints](#define-routes-for-endpoints) and / or [Add Handlers for Endpoints](#add-handlers-for-endpoints) to add a route / handler for your endpoint
3. Define an Array where you specify the request that you want to mock (this is needed, as in whitelist mode, all requested go through by default)

```ts
import { getDefaultRoutes } from '@valantic/spartacus-mock';

// default routes defined in the spartacus-mock library
const defaultRoutes = getDefaultRoutes(environment);

export const mockedRequests = (): MockRequest[] => {
  return [
    {
      url: defaultRoutes.languages,
      requestFunction: 'get',
    },
  ];
};
```

4. Add everything to your mockConfig

```ts
// src/main.ts
// your custom defined handlers
import { handlers } from './mock-server/handlers';

async function prepare(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (environment.mockServer) {
    const { prepareMock } = await import(
      /* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock'
    );

    const mockConfig: MockConfig = {
      enableWorker: environment.mockServer || false,
      disableDefaultData: true,
      handlers: handlers(),
      mockedRequests: mockedRequests(),
      environment,
    };

    return prepareMock(mockConfig);
  }

  return Promise.resolve(undefined);
}
```

#### Mock only certain pages

1. Add the property `disableDefaultData: true` to the mockConfig in your `main.ts` file
2. Follow the steps described in [Add custom pages or override default pages](#add-custom-pages-or-override-default-pages) to add a custom page
3. Define an Array where you specify the request that you want to mock (this is needed, as in whitelist mode, all requested go through by default)

```ts
import { getDefaultRoutes } from '@valantic/spartacus-mock';

// default routes defined in the spartacus-mock library
const defaultRoutes = getDefaultRoutes(environment);

export const mockedRequests = (): MockRequest[] => {
  return [
    {
      url: defaultRoutes.pages,
      requestFunction: 'get',
    },
  ];
};
```

4. Define a string array with the `pageId` of the page that you want to mock (this is needed, as for the other pages, the `pages` call still needs to go through)
   `mockedPageIds: ['hello-world']`
5. Add everything to your mockConfig

```ts
// src/main.ts
// your custom defined handlers
import { handlers } from './mock-server/handlers';

async function prepare(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (environment.mockServer) {
    const { prepareMock } = await import(
      /* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock'
    );

    const mockConfig: MockConfig = {
      enableWorker: environment.mockServer || false,
      disableDefaultData: true,
      contentPages: contentPages(),
      mockedRequests: mockedRequests(),
      mockedPageIds: ['hello-world'],
      environment,
    };

    return prepareMock(mockConfig);
  }

  return Promise.resolve(undefined);
}
```
