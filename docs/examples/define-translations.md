# Define translations

Out of the box, spartacus-mock uses the default english translations provided by spartacus itself. You can override these translations or add your own custom translations:

## Override default translations

1. Create a file `src/mock-server/mock-data/translations/translations.ts` with the following content

```ts
// src/mock-server/mock-data/translations/translations.ts
// your overrides for the english translations
import { TranslationResources } from '@spartacus/core';
import { en } from './en';

export const translationResources: TranslationResources = {
  en,
};
```

2. Create a folder `en` within the `translations` folder
3. Create a file `src/mock-server/mock-data/translations/en/index.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/index.ts
// your custom chunks that you want to override
import { product } from './product';

export const en = {
  product,
};
```

4. Create a file `src/mock-server/mock-data/translations/en/product.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/product.ts
// your custom translations for the chunk product

export const product = {
  // your custom translations for the chunk product
  // you can add any nested objects here, they get deep merged with the existing default translations
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

## Add custom chunks for language EN

1. Create a file `src/mock-server/mock-data/translations/translations.ts` with the following content

```ts
// src/mock-server/mock-data/translations/translations.ts
// your overrides for the english translations
import { TranslationResources } from '@spartacus/core';
import { en } from './en';

export const translationResources: TranslationResources = {
  en,
};
```

2. Create a folder `en` within the `translations` folder
3. Create a file `src/mock-server/mock-data/translations/en/index.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/index.ts
// your custom chunks that you want to add
import { myCustomChunk } from './my-custom-chunk';

export const en = {
  myCustomChunk,
};
```

4. Create a file `src/mock-server/mock-data/translations/en/my-custom-chunk.ts` with the following content

```ts
// src/mock-server/mock-data/translations/en/product.ts
// your custom translations for the chunk myCustomChunk

export const myCustomChunk = {
  // your translations for the chunk myCustomChunk
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

> Pro tip: Do not forget to add the new chunk to the translation chunk config of the spartacus configuration module.

## Add translations for other languages

1. Create a file `src/mock-server/mock-data/translations/translations.ts` with the following content

```ts
// src/mock-server/mock-data/translations/translations.ts
// your overrides for the english translations
import { TranslationResources } from '@spartacus/core';
import { de } from './de';

export const translationResources: TranslationResources = {
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
