import { faker } from '@faker-js/faker';
import { ImageType, Occ } from '@spartacus/core';
import { mediaImage } from '../media/media-image';
import { createProductCategory } from './product-categories';
import { createProductClassification, productClassification } from './product-classification';
import { productPrice } from './product-price';
import { createBaseOption } from './product-base-option';
import { createPrice, createPriceRange } from '../commerce/price';

export const activeTabItems = [
  'ProductDetailsTabComponent',
  'ProductSpecsTabComponent',
  'ProductReviewsTabComponent',
  'deliveryTab',
];

interface OccProductExtended extends Occ.Product {
  displayedTabs?: string[];
}

// TODO: Only this method should get used at the end
export const createProduct = (additionalData?: Occ.Product): Occ.Product => {
  return {
    availableForPickup: true,
    averageRating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
    baseOptions: [createBaseOption()],
    baseProduct: `BASE_${faker.random.numeric(6)}`,
    categories: [createProductCategory(), createProductCategory(), createProductCategory()],
    classifications: [createProductClassification(), createProductClassification(), createProductClassification()],
    code: faker.random.numeric(6),
    description: faker.commerce.productDescription(),
    futureStocks: [],
    images: [],
    manufacturer: faker.company.name(),
    multidimensional: false,
    name: faker.commerce.productName(),
    numberOfReviews: faker.datatype.number({ min: 0, max: 999 }),
    potentialPromotions: [],
    price: createPrice(),
    priceRange: createPriceRange(),
    productReferences: [],
    purchasable: true,
    reviews: [],
    stock: undefined,
    summary: faker.lorem.sentences(5),
    url: faker.internet.url(),
    variantMatrix: [],
    variantOptions: [],
    variantType: '',
    volumePrices: [],
    volumePricesFlag: false,
    ...additionalData,
  };
};

export const product = (productCode: string, _productIndex: number = 1): OccProductExtended => {
  const productName = faker.commerce.productName();

  const purchasable = true;

  return {
    // Scope List / Default properties
    code: productCode,
    name: productName,
    price: productPrice(),
    images: [
      mediaImage('hires', ImageType.PRIMARY, 3500, 3500),
      mediaImage('product', ImageType.PRIMARY, 675, 675),
      mediaImage('thumbnail', ImageType.PRIMARY, 180, 180),
      mediaImage('cartIcon', ImageType.PRIMARY, 180, 180),

      mediaImage('zoom', ImageType.GALLERY, 1200, 1200, 0),
      mediaImage('product', ImageType.GALLERY, 480, 480, 0),
      mediaImage('thumbnail', ImageType.GALLERY, 180, 180, 0),

      mediaImage('zoom', ImageType.GALLERY, 1200, 1200, 1),
      mediaImage('product', ImageType.GALLERY, 480, 480, 1),
      mediaImage('thumbnail', ImageType.GALLERY, 180, 180, 1),

      mediaImage('zoom', ImageType.GALLERY, 1200, 1200, 2),
      mediaImage('product', ImageType.GALLERY, 480, 480, 2),
      mediaImage('thumbnail', ImageType.GALLERY, 180, 180, 2),
    ],

    // Scope Details
    availableForPickup: true,
    averageRating: 4.541666666666667,
    categories: [],
    description: `<p>${faker.commerce.productDescription()}</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`,
    summary: `${faker.commerce.productDescription()}`,
    manufacturer: 'Product Brand',
    numberOfReviews: 24,
    priceRange: {},
    stock: {
      stockLevel: faker.datatype.number(999),
      stockLevelStatus: 'inStock',
    },
    url: `/product/${productCode}/product-name`,
    displayedTabs: activeTabItems,
    purchasable,
  };
};

export const productBaseData = (): Occ.Product => {
  return {
    baseOptions: [],
    name: faker.commerce.productName(),
    purchasable: true,
  };
};

export const productClassifications = (): Occ.Product => {
  return {
    classifications: new Array(faker.datatype.number(10)).fill(null).map(() => productClassification()),
  };
};
