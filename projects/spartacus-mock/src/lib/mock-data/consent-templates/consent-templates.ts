import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const createConsentTemplate = (additionalData?: Occ.ConsentTemplate): Occ.ConsentTemplate => {
  return {
    id: faker.string.uuid(),
    name: `I approve to this sample ${faker.commerce.department()} consent`,
    description: faker.lorem.sentences(faker.number.int({ min: 1, max: 5 })),
    version: 0,
    currentConsent: {
      code: 'yes',
      consentGivenDate: faker.date.past(),
    },
    ...additionalData,
  };
};

export const consentTemplateList = (): Occ.ConsentTemplateList => {
  return {
    consentTemplates: [
      createConsentTemplate(),
      createConsentTemplate(),
      createConsentTemplate(),
      createConsentTemplate({
        currentConsent: undefined,
      }),
    ],
  };
};
