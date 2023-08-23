import { TranslationResources } from '@spartacus/core';
import { MockConfig } from '../../types';
import { languageEn } from './en';

const translationResources = (config: MockConfig): TranslationResources => {
  return {
    en: languageEn((config.translations && config.translations['en']) || {}),
    ...config.translations,
  };
};

export const translations = (language: string, namespace: string, config: MockConfig) => {
  return translationResources(config)[language][namespace] ?? translationResources(config)['en'][namespace];
};
