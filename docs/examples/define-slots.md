# Define slots

Out of the box, `spartacus-mock` comes with the mock-data for the standard electronics store.
You can add additional custom slots or override existing slots:

1. Create a file `src/mock-server/mock-data/slots.ts`
2. Add a function `customSlot` to return the mock-data for your custom slot

```ts
// src/mock-server/mock-data/slots.ts
import { cmsParagraphComponent } from '@valantic/spartacus-mock';
import { Occ } from '@spartacus/core';

export const customSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'testSlot', // use same slotId as an existing slot to overide the default slot
    slotUuid: 'testSlot1234',
    position: 'TestSlot', // use an existing position to add your custom components to that slot
    name: 'My Test Slot',
    slotShared: true,
    components: {
      component: [cmsParagraphComponent('Hello World!')],
    },
  };
};

export const customSlots = (): Occ.ContentSlot[] => {
  return [customSlot()];
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
      customSlots: customSlots(),
    };

    return prepareMock(mockConfig);
  }
  return Promise.resolve(undefined);
}
```

> Pro tip: When your project (and therefore also your mock-data) grows, we recommend to created different files / folders for different features / pages
> to keep your mock-data organized.
