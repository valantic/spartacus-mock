# SpartacusMock

This developer tool offers you the possibility, to mock the OCC Endpoints of your Composable Storefront (Spartacus). It uses the [Mock Service Worker](https://mswjs.io/) to mock the calls.
It increases the flexibility and independence of frontend engineers, since you don't need to wait anymore, until

- "...that dev system is ready"
- "...that feature has been merged & deployed by the backend"
- "...that page / component has been added in Smartedit by the backend"

It comes with the mock-data for the standard electronics store.

You can then define your own custom mock-data tailored to your custom spartacus project.
Adding new pages and components in no time helps you, developing your actual feature, without
waiting until the Backend has finished or the hassle of running a local hybris ;-).

## Versions

This project is guaranteed to work with the listed angular versions and the listed Spartacus Versions in this table.

| Angular          | Spartacus | spartacus-mock |
| ---------------- | :-------: | :------------: |
| >=14.0.0 <15.0.0 |   5.x.x   |      1.x       |

It is possible that it works with other versions, but not tested.

## Table of contents

- [Feature Scope](#feature-scope)
- [How to use](#how-to-use)
  - [Getting started](#getting-started)
  - [Define Mock Data](#define-mock-data)
    - [Define Routes for Endpoints](#define-routes-for-endpoints)
    - [Add Handlers for Endpoints](#add-handlers-for-endpoints)
    - [Add custom pages or override default pages](#add-custom-pages-or-override-default-pages)
    - [Add custom Slots or overrode default slots](#add-custom-slots-or-override-default-slots)
    - [Add custom translations or override default translations](#add-custom-translations-or-override-default-translations)
- [API](#api)
- [Use with HTTPS](#use-with-https)
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
   1. `angular.json`
   2. `package.json`
   3. `src/environments/environment.ts`
   4. `src/environments/environment.model.ts`
   5. `src/main.ts`
4. Start the spartacus instance as you would normally do
5. Open your browser
6. Notice the message in the console: `[MSW] Mocking enabled.`
7. All mocked calls are still normally visible in the network tab of your browser's developer tools
8. For more information, see the [MSW documentation](https://mswjs.io/docs/api/rest)

### Define Mock Data

Out of the box, `spartacus-mock` comes with all\* mock-data needed to run the standard spartacus electronic sample store.
For your project, you probably want to define your own mock-data for the default Endpoints of spartacus and also add
custom Endpoints.

For every endpoint where you want to return custom data, you need to define a handler, which intercepts the call to the endpoint and
returns mock data. Every handler needs a route to intercept the call.

\*All meaning all base commerce features. Check list of supported feature libs & roadmap to see which feature libs are planned to add

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
// for custom routes, use your getRoutes function explained above
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

> Defining a custom handler for an existing route (aka OCC Endpoint) will override the default handler for this route.

4. Create a file `src/mock-server/mock-data/languages.ts`
5. Add a `languageList` function to return the mock data for the languages endpoint:

```ts
// src/mock-server/mock-data/languages.ts
import { createLanguage } from '@valantic/spartacus-mock';
import { Occ } from '@spartacus/core';

// you can use the `createLanguage` function from our library or create your own
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
      environment,
      handlers,
    };

    return prepareMock(mockConfig);
  }

  return Promise.resolve(undefined);
}
```

#### Add custom pages or override default pages

Out of the box, `spartacus-mock` comes with the mock-data for the following pages:

- Homepage
- Search Page
- Category Page
- Product Detail Page
- Cart Page
- Checkout Pages
- My Account Pages
- Content Page

You can override these pages or provide your own custom pages:

1. Create a file `src/mock-server/mock-data/pages.ts`
2. Add a `contentPages` function to return the mock-data for your custom pages
   (Using the ContentPage Class is optional)

```ts
// src/mock-server/mock-data/pages/index.ts
import {
  PageFactoryService,
  Pages,
  cmsParagraphComponent,
  contentSlot,
} from '@valantic/spartacus-mock';

export const contentPages = (): Pages => {
  const pageFactoryService = new PageFactoryService([]);

  return {
    'hello-world': pageFactoryService.createContentPage(
      'helloWorld',
      'Hello World',
      [
        contentSlot('Section2A', [
          cmsParagraphComponent('Hello World!'),
        ]),
      ]
    ),
  };
};
```

> Defining a custom page for an existing object-key (aka Page label in the browser) will override the default mock data for this page.

3. Append your pages function to the mockConfig in your `main.ts` file

```ts
// src/main.ts
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

#### Add custom Slots or override default Slots

Out of the box, `spartacus-mock` comes with the mock-data for the global content slots to display header and footer for the standard electronics store.
You can add additional custom slots:

1. Create a file `src/mock-server/mock-data/slots.ts`
2. Add a `testSlot` function to return the mock-data for your custom slot

```ts
// src/mock-server/mock-data/slots.ts
import { cmsParagraphComponent } from '@valantic/spartacus-mock';
import { Occ } from '@spartacus/core';

export const testSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'testSlot',
    slotUuid: 'testSlot1234',
    position: 'TestSlot',
    name: 'My Test Slot',
    slotShared: true,
    components: {
      component: [cmsParagraphComponent('Hello World!')],
    },
  };
};
```

> Use `slotPosition` of an existing slot to add your custom components to that slot.
> Use `slotPosition` and `slotId` to override the default components with your custom components.

3. Append your slot function to your mockConfig in your `main.ts` file

```ts
// src/main.ts
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

> Pro tip: When your project (and therefore also your mock-data) grows, we recommend to created different files / folders for different features / pages
> to keep your mock-data organized.

#### Add custom translations or override default translations

TODO

## API

TODO

## Use with HTTPS

TODO

## GitHub issues

If you encounter a problem with this library or if you have a new feature you'd like to see in this project,
please create [a new issue](https://github.com/valantic/spartacus-mock/issues/new/choose).

## Roadmap

- Add Angular 15 / 16 Compatibility Support (usually when new Spartacus Versions are released)
- Add HTTP Status Code overriding to simulate different backend responses
- Add unit tests for the library code
- Add mock handlers for more Spartacus features
  - My Account Order Returns
  - Asm
  - Product Configurator
  - Pickup in Store
  - Organization
  - ...
