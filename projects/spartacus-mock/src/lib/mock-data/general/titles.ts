import { Occ } from '@spartacus/core';

export const createTitle = (additionalData?: Occ.Title): Occ.Title => {
  return {
    code: 'mr',
    name: 'Mr',
    ...additionalData,
  };
};

export const titles = (): Occ.TitleList => {
  return {
    titles: [
      createTitle({
        code: 'mr',
        name: 'Mr.',
      }),
      createTitle({
        code: 'mrs',
        name: 'Mrs.',
      }),
      createTitle({
        code: 'div',
        name: 'Divers',
      }),
    ],
  };
};
