import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const anonymousConsents = [
  { templateCode: 'MARKETING_NEWSLETTER', templateVersion: 0, consentState: null },
  { templateCode: 'PROFILE', templateVersion: 0, consentState: null },
  { templateCode: 'STORE_USER_INFORMATION', templateVersion: 0, consentState: null },
];

export const consentTemplatesOptions = () => {
  return {
    status: 200,
    headers: {
      Date: 'Fri, 05 Jan 2024 10:40:24 GMT',
      'Content-Length': '0',
      Connection: 'keep-alive',
      'X-Frame-Options': 'SAMEORIGIN',
      // @ts-ignore
      Vary: 'Origin',
      // @ts-ignore
      Vary: 'Access-Control-Request-Method',
      // @ts-ignore
      Vary: 'Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,PATCH,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'x-anonymous-consents',
      'Access-Control-Expose-Headers': 'x-anonymous-consents',
    },
  };
};

export const consentTemplatesHead = () => {
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Connection: 'keep-alive',
      'X-OneAgent-JS-Injection': 'true',
      'Timing-Allow-Origin': '*',
      'Server-Timing': 'dtRpid;desc="-1426008374", dtTao;desc="1", dtSInfo;desc="0"',
      'X-Frame-Options': 'SAMEORIGIN',
      // @ts-ignore
      Vary: 'Origin',
      // @ts-ignore
      Vary: 'Access-Control-Request-Method',
      // @ts-ignore
      Vary: 'Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': 'x-anonymous-consents',
      'X-Anonymous-Consents': encodeURI(JSON.stringify(anonymousConsents)),
      'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      'Strict-Transport-Security': 'max-age=16070400 ; includeSubDomains',
      'X-XSS-Protection': '1; mode=block',
      'X-Content-Type-Options': 'nosniff',
    },
  };
};

export const createConsentTemplate = (
  userId: string,
  consentId: string,
  additionalData?: Occ.ConsentTemplate
): Occ.ConsentTemplate => {
  const consent = {
    description: faker.lorem.sentences(faker.number.int({ min: 1, max: 5 })),
    id: consentId,
    name: `I approve to this sample ${faker.commerce.department()} consent`,
    version: 0,
    ...additionalData,
  };

  if (userId === 'current') {
    consent.currentConsent = {
      code: faker.string.uuid(),
      // @ts-ignore
      consentGivenDate: faker.date.past().toDateString(),
    };
  }

  return consent;
};

export const consentTemplateList = (userId: string): Occ.ConsentTemplateList => {
  return {
    consentTemplates: [
      createConsentTemplate(userId, 'MARKETING_NEWSLETTER'),
      createConsentTemplate(userId, 'PROFILE'),
      createConsentTemplate(userId, 'STORE_USER_INFORMATION'),
    ],
  };
};
