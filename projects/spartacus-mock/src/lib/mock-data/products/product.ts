import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { image } from '../media/media-image';
import { createProductCategory } from './product-categories';
import { createProductClassification } from './product-classification';
import { createBaseOption, createVariantOption } from './product-base-option';
import { createPrice, createPriceRange } from '../commerce/price';
import { createFutureStock, createProductStock } from './product-stock';
import { createPromotion } from '../commerce/promotion';
import { createProductReference } from './product-references';
import { reviewList } from './product-reviews';
import { ProductModifier } from '../../types';

export const activeTabItems = [
  'ProductDetailsTabComponent',
  'ProductSpecsTabComponent',
  'ProductReviewsTabComponent',
  'deliveryTab',
];

export const createBaseProduct = (additionalData?: Occ.Product): Occ.Product => {
  return {
    code: faker.random.numeric(6),
    name: faker.commerce.productName(),
    images: [
      // PRIMARY
      image(undefined, { width: 3500, height: 3500, format: 'hires' }),
      image(undefined, { width: 675, height: 675, format: 'product' }),
      image(undefined, { width: 180, height: 180, format: 'thumbnail' }),
      image(undefined, { width: 180, height: 180, format: 'cartIcon' }),

      // GALLERY
      image(undefined, {
        width: 1200,
        height: 1200,
        format: 'zoom',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 1,
      }),
      image(undefined, {
        width: 480,
        height: 480,
        format: 'product',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 1,
      }),
      image(undefined, {
        width: 180,
        height: 180,
        format: 'thumbnail',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 1,
      }),

      image(undefined, {
        width: 1200,
        height: 1200,
        format: 'zoom',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 2,
      }),
      image(undefined, {
        width: 480,
        height: 480,
        format: 'product',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 2,
      }),
      image(undefined, {
        width: 180,
        height: 180,
        format: 'thumbnail',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 2,
      }),

      image(undefined, {
        width: 1200,
        height: 1200,
        format: 'zoom',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 3,
      }),
      image(undefined, {
        width: 480,
        height: 480,
        format: 'product',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 3,
      }),
      image(undefined, {
        width: 180,
        height: 180,
        format: 'thumbnail',
        imageType: Occ.ImageType.GALLERY,
        galleryIndex: 3,
      }),
    ],
    baseProduct: `BASE_${faker.random.numeric(6)}`,
    price: createPrice(),
    purchasable: true,
    url: faker.internet.url(),
    stock: createProductStock(),
    ...additionalData,
  };
};

/**
 * Gets a FULL product data response.
 */
export const createProduct = (additionalData?: Occ.Product, modifier?: ProductModifier): Occ.Product => {
  return {
    ...createBaseProduct(),
    availableForPickup: true,
    averageRating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
    baseOptions: [createBaseOption()],
    categories: [createProductCategory(), createProductCategory(), createProductCategory()],
    classifications: [createProductClassification(), createProductClassification(), createProductClassification()],
    description: faker.commerce.productDescription(),
    futureStocks: [createFutureStock()],
    manufacturer: faker.company.name(),
    multidimensional: false,
    numberOfReviews: faker.datatype.number({ min: 0, max: 999 }),
    potentialPromotions: [createPromotion()],
    priceRange: createPriceRange(),
    productReferences: [
      createProductReference({ referenceType: 'ACCESSORIES' }),
      createProductReference({ referenceType: 'SIMILAR' }),
    ],
    reviews: reviewList().reviews,
    summary: faker.lorem.sentences(5),
    variantMatrix: [],
    variantOptions: [createVariantOption(), createVariantOption(), createVariantOption()],
    variantType: '',
    volumePrices: [
      createPrice({ minQuantity: 10 }),
      createPrice({ minQuantity: 100 }),
      createPrice({ minQuantity: 1000 }),
    ],
    volumePricesFlag: false,
    ...additionalData,
  };
};
