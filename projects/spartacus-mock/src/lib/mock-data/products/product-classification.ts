import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';
import Feature = Occ.Feature;

function classificationFeature(): Feature {
  return {
    code: faker.random.numeric(8),
    comparable: true,
    featureUnit: {
      name: faker.science.unit().name,
      symbol: faker.science.unit().symbol,
      unitType: faker.random.numeric(2)
    },
    featureValues: [
      {
        value: faker.random.numeric(2)
      }
    ],
    name: faker.science.unit().name,
    range: false
  }
}

export function productClassification(): Occ.Classification {
  return {
    code: faker.random.numeric(4),
    features: new Array(faker.datatype.number(10)).fill(null).map(() => classificationFeature()),
    name: faker.commerce.productName()
  }
}
