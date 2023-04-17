import { faker } from '@faker-js/faker';
import { Occ, Review } from '@spartacus/core';

const createReview = (): Review => {
  return {
    comment: faker.lorem.paragraphs(faker.datatype.number({ min: 1, max: 5 })),
    date: faker.date.past(),
    headline: faker.lorem.words(faker.datatype.number({ min: 2, max: 5 })),
    id: faker.random.numeric(10),
    principal: { name: `${faker.name.firstName()} ${faker.name.lastName()}`, uid: faker.internet.email() },
    rating: faker.datatype.number({ min: 1, max: 5 }),
  };
};

const createReviews = (numberOfReviews = 5) => {
  return new Array(numberOfReviews).fill(undefined).map(createReview);
};

export const productReviews = (): Occ.ReviewList => {
  return {
    reviews: createReviews(faker.datatype.number({ min: 5, max: 30 })),
  };
};

export const productReviewSubmit = (): Occ.Review => {
  return {
    alias: 'Hans Muster',
    comment: 'This is my Review',
    date: new Date('2023-03-30T12:20:54+0000'),
    headline: 'Review Title',
    id: '8796158623793',
    principal: {
      name: 'Hans Muster',
      uid: 'hans.muster@gmail.com|ottos',
    },
    rating: 4,
  };
};
