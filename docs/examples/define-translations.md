# Define translations

Out of the box, spartacus-mock uses the default english translations provided by spartacus itself. You can override these translations, enhance them with
additional translations or add your own custom translations:

## Override default translations

1. Open the file `src/mock-server/mock-data/translations/translations.ts` (created by the setup schematics)
2. Out of the box, the default translations from Spartacus Assets are imported in this file
3. Create a folder `en` within the `translations` folder
4. Create a file `src/mock-server/mock-data/translations/en/product.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/product.ts
// your custom translations for the chunk product

export const product = {
  // your custom translations for the chunk product
  // you can add any nested objects here, they get deep merged with the existing default translations
  productSummary: {
    id: 'ID (custom)',
  },
};
```

5. Create a file `src/mock-server/mock-data/translations/en/index.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/index.ts
import { mergeDeep } from '@valantic/spartacus-mock';
import { translations } from '@spartacus/assets';
import { product } from './product';

export const en = {
  ...mergeDeep(translations['en'], { product }),
};
```

6. Add the enhanced english chunks to the translations file

```ts
import { en } from './en';

export const translationResources = {
  en,
};
```

## Add custom chunks for language EN

1. Open the file `src/mock-server/mock-data/translations/translations.ts`
2. Create a folder `en` within the `translations` folder
3. Create a file `src/mock-server/mock-data/translations/en/my-custom-chunk.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/product.ts
// your custom translations for the chunk myCustomChunk

export const myCustomChunk = {
  myCustomChunk: {
    foo: 'bar',
  },
};
```

5. Create a file `src/mock-server/mock-data/translations/en/index.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/index.ts
import { translations } from '@spartacus/assets';
import { myCustomChunk } from './my-custom-chunk';

export const en = {
  ...translations['en'],
  myCustomChunk,
};
```

6. Add the enhanced english chunks to the translations file

```ts
import { en } from './en';

export const translationResources = {
  en,
};
```

7. Use your new translation in the template: `{{'myCustomChunk.foo' | cxTranslate}}`

> Pro tip: Do not forget to add the new chunk to the translation chunk config of the spartacus configuration module.

## Add translations for other languages

1. Open the file `src/mock-server/mock-data/translations/translations.ts` and add a `de` property

```ts
// src/mock-server/mock-data/translations/translations.ts
import { TranslationResources } from '@spartacus/core';
import { de } from './de';

export const translationResources: TranslationResources = {
  en: translations['en'],
  de,
};
```

2. Create a folder `de` within the `translations` folder
3. Create a file `src/mock-server/mock-data/translations/de/index.ts` with the following content

```ts
// src/mock-server/mock-data/translations/de/index.ts
// your custom chunks that you want to override
import { product } from './product';

export const de = {
  product,
};
```

4. Create a file `src/mock-server/mock-data/translations/de/product.ts` with the following content

```ts
// src/mock-server/mock-data/translations/de/product.ts
// your german translations for the chunk product

export const product = {
  // your  german translations for the chunk product
};
```

5. Append your translations to your mockConfig in your `main.ts` file

```ts
// src/main.ts
// add your translation overrides
import { translationResources } from './mock-server/mock-data/translations/translations';

const mockConfig: MockConfig = {
  // ...
  translations: translationResources,
  // ...
};
```

> Pro tip: If you want to have full control over the translations, you can also provide a custom handler for the translation endpoint as described in "Add Handlers for Endpoints"
