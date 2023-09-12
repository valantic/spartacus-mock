### Define pages

Out of the box, `spartacus-mock` comes with the mock-data for the following pages:

- Homepage
- Search Page
- Category Page
- Product Detail Page
- Cart Page
- Checkout Pages
- My Account Pages (except Order Return Feature)
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
import { customSlots } from './slots';

export const contentPages = (): Pages => {
  // pass in your customSlots function if you need custom slots, otherwise pass in empty array
  const pageFactoryService = new PageFactoryService(
    customSlots()
  );

  return {
    'hello-world': pageFactoryService.createContentPage(
      '/hello-world',
      'Hello World',
      [
        contentSlot('Section2A', [
          cmsParagraphComponent('Hello World!'),
        ]),
      ]
    ),

    // overrides the default page with page label /contact
    contact: pageFactoryService.createContentPage(
      '/contact',
      'Contact Custom',
      [
        contentSlot('Section2A', [
          cmsParagraphComponent('Custom Contact Page!'),
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
