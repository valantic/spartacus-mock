import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { image } from '../media/image';

export const createPromotionOrderEntryConsumed = (
  additionalData?: Occ.PromotionOrderEntryConsumed
): Occ.PromotionOrderEntryConsumed => {
  return {
    adjustedUnitPrice: faker.datatype.number({ min: 1, max: 50 }),
    code: faker.random.numeric(6),
    orderEntryNumber: 1,
    quantity: 1,
    ...additionalData,
  };
};

export const createPromotionResult = (additionalData?: Occ.PromotionResult): Occ.PromotionResult => {
  return {
    consumedEntries: [createPromotionOrderEntryConsumed()],
    description: faker.lorem.words(4),
    promotion: createPromotion(),
    ...additionalData,
  };
};

export const createPromotionRestriction = (additionalData?: Occ.PromotionRestriction): Occ.PromotionRestriction => {
  return {
    description: faker.lorem.sentences(3),
    restrictionType: '',
    ...additionalData,
  };
};

export const createPromotion = (additionalData?: Occ.Promotion): Occ.Promotion => {
  return {
    code: faker.datatype.uuid(),
    couldFireMessages: [],
    description: faker.lorem.sentences(3),
    enabled: true,
    endDate: faker.date.future(),
    firedMessages: [],
    priority: 1,
    productBanner: image(),
    promotionGroup: '',
    promotionType: '',
    restrictions: [createPromotionRestriction()],
    startDate: faker.date.past(),
    title: faker.lorem.words(5),
    ...additionalData,
  };
};
