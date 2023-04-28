import { Occ } from '@spartacus/core';

export const createLanguage = (additionalData?: Occ.Language): Occ.Language => {
  return {
    active: true,
    isocode: 'en_CH',
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
        isocode: 'de_CH',
        name: 'German',
        nativeName: 'Deutsch',
      }),
      createLanguage({
        isocode: 'it_CH',
        name: 'Italian',
        nativeName: 'Italiano',
      }),
      createLanguage({
        isocode: 'fr_CH',
        name: 'French',
        nativeName: 'Francais',
      }),
    ],
  };
};
