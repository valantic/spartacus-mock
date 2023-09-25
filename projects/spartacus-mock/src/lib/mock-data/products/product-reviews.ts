import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createUser } from '../auth/user';

export const createReview = (additionalData?: Occ.Review): Occ.Review => {
  return {
    alias: faker.person.fullName(),
    comment: faker.lorem.paragraphs(faker.number.int({ min: 1, max: 5 })),
    date: faker.date.past(),
    headline: faker.lorem.words(faker.number.int({ min: 2, max: 5 })),
    id: faker.string.numeric(10),
    principal: createUser(),
    rating: faker.number.int({ min: 1, max: 5 }),
    ...additionalData,
  };
};

export const reviewList = (): Occ.ReviewList => {
  return {
    reviews: new Array(faker.number.int({ min: 1, max: 10 })).fill(null).map(() => createReview()),
  };
};
