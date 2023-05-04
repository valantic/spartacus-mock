# SpartacusMock

> This project is still in development and not ready for production use.

This project offers you the possibility, to mock the OCC Endpoint of your Spartacus Storefront. It uses the [Mock Service Worker](https://mswjs.io/) to mock the API calls.

## How to use

### Getting started

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Install the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
   1. `angular.json`
   2. `package.json`
   3. `src/environments/environment.ts`
   4. `src/main.ts`
4. Start the spartacus instance as you would normally do
5. Open your browser
   1. Notice the message in the console: `[MSW] Mocking enabled.`
   2. All mocked calls are still normally visible in the network tab of your browser's developer tools
   3. For more information, see the [MSW documentation](https://mswjs.io/docs/api/rest)

### Define Mock Data

Out of the box, `spartacus-mock` comes with all mock-data needed to run the standard spartacus electronic sample store.
For your project, you probably want to define your own mock-data for the default endpoints or also add more mocked pages / components / endpoints.

### Mocking Endpoints

Create a custom handlers file `src/mock-server/handlers.ts`

In this handlers file you can define all your custom handlers like in this example:

```ts
export const handlers: any[] = [
  rest.get(
    routes.regions,
    (
      _req: RestRequest,
      res: ResponseComposition,
      ctx: RestContext
    ) => {
      return res(ctx.status(200), ctx.json(regions()));
    }
  ),
];
```

Then you just need to append your custom handlers to the mockConfig in your `main.ts` file

```ts
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

### Mocking Pages

To provider your own content pages you need to create a content pages object like following:

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

### Mocking Global Slots

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
