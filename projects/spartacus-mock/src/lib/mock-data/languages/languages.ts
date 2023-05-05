import { Occ } from '@spartacus/core';

export const createLanguage = (additionalData?: Occ.Language): Occ.Language => {
  return {
    active: true,
    isocode: 'en',
    name: 'English',
    nativeName: 'English',
    ...additionalData,
  };
};

export const languageList = (): Occ.LanguageList => {
  return {
    languages: [
      createLanguage(),
      createLanguage({
        isocode: 'de',
        name: 'German',
        nativeName: 'Deutsch',
      }),
      createLanguage({
        isocode: 'it',
        name: 'Italian',
        nativeName: 'Italiano',
      }),
      createLanguage({
        isocode: 'fr',
        name: 'French',
        nativeName: 'Francais',
      }),
    ],
  };
};
