import { TranslationResources } from '@spartacus/core';
import { MockConfig } from '../../types';
import { languageEn } from './en';

const translationResources = (config: MockConfig): TranslationResources => {
  return {
    // apply custom translations potentially provided by the developer
    ...config.translations,

    // apply default english translations
    en: languageEn((config.translations && config.translations['en']) || {}),
  };
};

export const translationsForNamespace = (language: string, namespace: string, config: MockConfig) => {
  // return the requested namespace for the requested language, or the requested namespace for the default language
  return translationResources(config)[language][namespace] ?? translationResources(config)['en'][namespace];
};
