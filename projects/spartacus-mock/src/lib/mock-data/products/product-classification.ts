import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';

export const createFeatureValue = (): Occ.FeatureValue => {
  return {
    value: faker.string.numeric(2),
  };
};

export const createFeatureUnit = (additionalData?: Occ.FeatureUnit): Occ.FeatureUnit => {
  return {
    name: faker.science.unit().name,
    symbol: faker.science.unit().symbol,
    unitType: faker.string.numeric(2),
    ...additionalData,
  };
};

export const createFeature = (additionalData?: Occ.Feature): Occ.Feature => {
  return {
    code: faker.string.numeric(4),
    comparable: true,
    featureUnit: createFeatureUnit(),
    featureValues: [createFeatureValue()],
    name: faker.science.unit().name,
    range: false,
    ...additionalData,
  };
};

export const createProductClassification = (additionalData?: Occ.Classification): Occ.Classification => {
  return {
    code: faker.string.numeric(4),
    features: new Array(faker.number.int(10)).fill(null).map(() => createFeature()),
    name: faker.commerce.productName(),
    ...additionalData,
  };
};
