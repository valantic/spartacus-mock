import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

import PromotionResult = Occ.PromotionResult;

export const createPromotion = (code?: string, title?: string, description?: string): PromotionResult => {
  return {
    consumedEntries: [
      {
        adjustedUnitPrice: 0,
        code: '123',
        orderEntryNumber: 1,
        quantity: 1,
      },
    ],
    description: title || faker.lorem.words(4),
    promotion: {
      code: code || faker.datatype.uuid(),
      description: description || faker.lorem.paragraphs(1),
      title: title || faker.lorem.words(4),
      enabled: true,
    },
  };
};
