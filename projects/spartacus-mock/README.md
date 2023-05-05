# SpartacusMock

This project offers you the possibility, to mock the OCC Endpoint of your Spartacus Storefront. It uses the [Mock Service Worker](https://mswjs.io/) to mock the API calls.

## Versions

This project is guaranteed to work with the listed angular versions in this table. It is possible that it works with newer angular versions, but not tested.

| Angular          | spartacus-mock |
| ---------------- | :------------: |
| >=14.0.0 <15.0.0 |      v1.x      |

## Table of contents

- [Feature Scope](#feature-scope)
- [How to use](#how-to-use)
  - [Getting started](#getting-started)
  - [Define Mock Data](#define-mock-data)
    - [Define Routes for Endpoints](#define-routes-for-endpoints)
    - [Add Handlers for Endpoints](#add-handlers-for-endpoints)
    - [Override default pages or add custom pages](#override-default-pages-or-add-custom-pages)
    - [Override default Slots or add custom Slots](#override-default-slots-or-add-custom-slots)
  - [Validation state](#validation-state)
- [GitHub issues](#github-issues)
- [Roadmap](#roadmap)

## Feature Scope

Spartacus-Mock currently covers the following spartacus features:

- Home Page
- Content Page
- Product Categories
- Product Search
- Product Detail
- Cart
- Checkout
- My Account (except Order Returns)

See [Roadmap](#roadmap) for more information about the planned features.

## How to use

### Getting started

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Install the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
4. `angular.json`
5. `package.json`
6. `src/environments/environment.ts`
7. `src/environments/environment.model.ts`
8. `src/main.ts`
9. Start the spartacus instance as you would normally do
10. Open your browser
11. Notice the message in the console: `[MSW] Mocking enabled.`
12. All mocked calls are still normally visible in the network tab of your browser's developer tools
13. For more information, see the [MSW documentation](https://mswjs.io/docs/api/rest)

### Define Mock Data

Out of the box, `spartacus-mock` comes with all mock-data needed to run the standard spartacus electronic sample store.
For your project, you probably want to define your own mock-data for the default Endpoints of spartacus and also add
custom Endpoints.

For every endpoint where you want to return custom data, you need to define a handler , which intercepts the call to the endpoint and
returns mock data. Every handler needs a route to intercept the call.

#### Define Routes for Endpoints

> You need to define routes for your custom endpoints. Default Endpoints can use the `getDefaultRoutes` function from the library (besides
> if you want to adjust the url of a default endpoint).

1. Create a routes file `src/mock-server/routes.ts`
2. Add a routes function which returns an object like the following:

```ts
import { Environment } from 'src/environments/environment.model';

export function getRoutes(environment: Environment) {
  const occEndpoint = `${environment.backend.occ?.baseUrl}${environment.backend.occ?.prefix}`;

  return {
    customEndpoint: `${occEndpoint}:baseSiteId/my-custom-endpoint`,
  };
}
```

#### Add Handlers for Endpoints

1. Create a handlers file `src/mock-server/handlers.ts`
2. Create a folder `src/mock-server/mock-data` where all your mock data lives
3. In the handlers file you can define all your custom handlers like in this example:

```ts
// src/mock-server/handlers.ts
import { getDefaultRoutes } from '@valantic/spartacus-mock';
import {
  ResponseComposition,
  RestContext,
  RestHandler,
  RestRequest,
  rest,
} from 'msw';
import { environment } from '../environments/environment';
import { countryList } from './mock-data/countries';

// default routes defined in the spartacus-mock library
const defaultRoutes = getDefaultRoutes(environment);

export const handlers: RestHandler[] = [
  rest.get(
    defaultRoutes.countries,
    (
      _req: RestRequest,
      res: ResponseComposition,
      ctx: RestContext
    ) => {
      return res(ctx.status(200), ctx.json(countryList()));
    }
  ),
];
```

4. Create a file `src/mock-server/mock-data/languages.ts`
5. Add a `languageList` function to return the mock data for the languages endpoint:

```ts
// src/mock-server/mock-data/languages.ts
import { createLanguage } from '@valantic/spartacus-mock';
import { Occ } from '@spartacus/core';

// you can use the `languageList` function from our library or create your own
export const languageList = (): Occ.LanguageList => {
  return {
    languages: [
      createLanguage({
        isocode: 'en',
        name: 'English',
        nativeName: 'English',
      }),
      createLanguage({
        isocode: 'de',
        name: 'German',
        nativeName: 'Deutsch',
      }),
    ],
  };
};
```

6. Append your handlers to the mockConfig in your `main.ts` file

```ts
// src/main.ts
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
      environment,
      handlers,
    };

    return prepareMock(mockConfig);
  }

  return Promise.resolve(undefined);
}
```

#### Override default pages or add custom pages

To override a default page or provide your own content pages you need to create a content pages object like following:

(Using the ContentPage Class is optional)

```ts
// src/mock-server/mock-data/pages/index.ts
import {
  ContentPage,
  Pages,
} from '@valantic/spartacus-mock';

export const contentPages = (): Pages => {
  const contentPage = new ContentPage([]);

  return {
    'hello-world': contentPage.createContentPage(
      'helloWorld',
      'Hello World',
      []
    ),
  };
};
```

This contentPages object you can provide now by the mockConfig in your `main.ts` file.

```ts
import { contentPages } from './mock-server/mock-data/pages';

async function prepare(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (environment.mockServer) {
    const { prepareMock } = await import(
      /* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock'
    );

    const mockConfig: MockConfig = {
      enableWorker: environment.mockServer || false,
      environment,
      contentPages: contentPages(),
    };

    return prepareMock(mockConfig);
  }

  return Promise.resolve(undefined);
}
```

#### Override default Slots or add custom Slots

To provide custom global Slots you need to create your slot like following:

```ts
import { Occ } from '@spartacus/core';

export const testSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'testSlot',
    slotUuid: 'testSlot1234',
    position: 'TestSlot',
    name: 'My Test Slot',
    slotShared: true,
    components: {
      component: [
        // Add Custom Components
      ],
    },
  };
};
```

And provide this slot to your mockConfig in your main.ts file like following:

```ts
import { testSlot } from './mock-server/mock-data/slots/test-slot';

async function prepare(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (environment.mockServer) {
    const { prepareMock } = await import(
      /* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock'
    );

    const mockConfig: MockConfig = {
      enableWorker: environment.mockServer || false,
      environment,
      customSlots: [testSlot()],
    };

    return prepareMock(mockConfig);
  }
  return Promise.resolve(undefined);
}
```

## GitHub issues

If you encounter a problem with this library or if you have a new feature you'd like to see in this project,
please create [a new issue](https://github.com/valantic/spartacus-mock/issues/new/choose).

## Roadmap

- Add Angular 15 / 16 Compatibility Support (usually when new Spartacus Versions are released)
- Add unit tests for the library code
- Add mock handlers for more Spartacus features
  - My Account Order Returns
  - Asm
  - Product Configurator
  - Pickup in Store
  - Organization
  - ...
