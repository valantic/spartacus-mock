# Define Handlers

You can define custom handlers for your custom endpoints or for existing endpoints (aka OCC Endpoints) of spartacus-mock.

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

export const handlers = (): RestHandler[] => {
  return [
    rest.get(
      defaultRoutes.languages,
      (
        _req: RestRequest,
        res: ResponseComposition,
        ctx: RestContext
      ) => {
        return res(
          ctx.status(200),
          ctx.json(languageList())
        );
      }
    ),
  ];
};
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
      handlers: handlers(),
    };

    return prepareMock(mockConfig);
  }

  return Promise.resolve(undefined);
}
```
