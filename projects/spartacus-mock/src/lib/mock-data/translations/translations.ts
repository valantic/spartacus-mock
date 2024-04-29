import { TranslationResources } from '@spartacus/core';
import { MockConfig } from '../../types';

const translationResources = (config: MockConfig): TranslationResources => {
  return {
    // apply custom translations potentially provided by the developer
    ...config.translations,

    // apply english custom translations
    en: {
      ...((config.translations && config.translations['en']) || {}),
    },
  };
};

export const translationsForNamespace = (language: string, namespace: string, config: MockConfig) => {
  // return the requested namespace for the requested language, or the requested namespace for the default language
  return (
    (translationResources(config)[language] && translationResources(config)[language][namespace]) ??
    translationResources(config)['en'][namespace]
  );
};

/**
 * Shows if the given item is of type object.
 */
function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merges the translation chunks that allows to only overwrite certain translation keys.
 *
 * @param defaultChunk Default Core Translation Chunk
 * @param customChunk Custom Translations (All Chunks)
 */
export function mergeDeep(defaultChunk: object, customChunk: object): object {
  let output: { [key: string]: any } = Object.assign({}, defaultChunk);

  if (isObject(defaultChunk) && isObject(customChunk)) {
    Object.keys(customChunk).forEach((key: string) => {
      if (isObject(customChunk[key as keyof typeof customChunk])) {
        if (key in defaultChunk) {
          output[key] = mergeDeep(
            defaultChunk[key as keyof typeof defaultChunk],
            customChunk[key as keyof typeof customChunk]
          );
        }
      } else {
        Object.assign(output, { [key]: customChunk[key as keyof typeof customChunk] });
      }
    });
  }

  return output;
}
