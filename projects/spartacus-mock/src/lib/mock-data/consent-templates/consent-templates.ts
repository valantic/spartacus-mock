import { Occ } from '@spartacus/core';
import ConsentTemplate = Occ.ConsentTemplate;
import { faker } from '@faker-js/faker';

export const createConsentTemplate = (consentGiven: boolean = false): ConsentTemplate => {
  return {
    id: faker.datatype.uuid(),
    name: `I approve to this sample ${faker.commerce.department()} consent`,
    description: faker.lorem.sentences(faker.datatype.number({ min: 1, max: 5 })),
    version: 0,
    currentConsent: consentGiven
      ? {
          code: 'yes',
          consentGivenDate: faker.date.past(),
        }
      : undefined,
  };
};

export const consentTemplates = () => {
  // consent templates normally returns an empty string
  return {
    consentTemplates: [
      createConsentTemplate(true),
      createConsentTemplate(true),
      createConsentTemplate(true),
      createConsentTemplate(false),
    ],
  };
};
