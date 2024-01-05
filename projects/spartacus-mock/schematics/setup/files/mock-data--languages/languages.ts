/**
 * This function generates a list of languages served by the mock server for the occ endpoint to load the available languages
 */
export const languages = () => {
  return {
    languages: [
      {
        active: true,
        isocode: 'en_CH',
        name: 'English',
        nativeName: 'English',
      },
      {
        active: true,
        isocode: 'de_CH',
        name: 'German',
        nativeName: 'Deutsch',
      },
      {
        active: true,
        isocode: 'it_CH',
        name: 'Italian',
        nativeName: 'Italiano',
      },
      {
        active: true,
        isocode: 'fr_CH',
        name: 'French',
        nativeName: 'Francais',
      },
    ],
  };
};
