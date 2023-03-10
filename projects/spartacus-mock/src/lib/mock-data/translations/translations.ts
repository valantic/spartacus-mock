import { TranslationResources } from '@spartacus/core';
import { languageEn } from './en';

const translationResources: TranslationResources = {
  en: languageEn,
};

export const translations = (language: string, namespace: string) => {
  return translationResources[language][namespace] ?? translationResources['en'][namespace];
};
