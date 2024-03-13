import { faker } from '@faker-js/faker';
import { Occ } from '@spartacus/core';
import { createPrice, createPriceRange, createPromotion } from '../commerce';
import { image } from '../media';
import { createBaseOption, createVariantOption } from './product-base-option';
import { createProductCategory } from './product-categories';
import { createProductClassification } from './product-classification';
import { createProductReference } from './product-references';
import { reviewList } from './product-reviews';
import { createFutureStock, createProductStock } from './product-stock';

export const activeTabItems = [
  'ProductDetailsTabComponent',
  'ProductSpecsTabComponent',
  'ProductReviewsTabComponent',
  'deliveryTab',
];

/**
 * Gets a Base Set of Product Data
 */
export const createBaseProduct = (additionalData?: Occ.Product): Occ.Product => {
  return {
    code: faker.string.numeric(6),
    name: faker.commerce.productName(),
    images: [
      // PRIMARY
      image({ format: 'hires' }, { width: 3500, height: 3500 }),
      image({ format: 'product' }, { width: 675, height: 675 }),
      image({ format: 'thumbnail' }, { width: 180, height: 180 }),
      image({ format: 'cartIcon' }, { width: 180, height: 180 }),

      // GALLERY
      image(
        { format: 'zoom', imageType: Occ.ImageType.GALLERY, galleryIndex: 1 },
        {
          width: 1200,
          height: 1200,
        }
      ),
      image(
        { format: 'product', imageType: Occ.ImageType.GALLERY, galleryIndex: 1 },
        {
          width: 480,
          height: 480,
        }
      ),
      image(
        { format: 'thumbnail', imageType: Occ.ImageType.GALLERY, galleryIndex: 1 },
        {
          width: 180,
          height: 180,
        }
      ),

      image(
        { format: 'zoom', imageType: Occ.ImageType.GALLERY, galleryIndex: 2 },
        {
          width: 1200,
          height: 1200,
        }
      ),
      image(
        { format: 'product', imageType: Occ.ImageType.GALLERY, galleryIndex: 2 },
        {
          width: 480,
          height: 480,
        }
      ),
      image(
        { format: 'thumbnail', imageType: Occ.ImageType.GALLERY, galleryIndex: 2 },
        {
          width: 180,
          height: 180,
        }
      ),

      image(
        { format: 'zoom', imageType: Occ.ImageType.GALLERY, galleryIndex: 3 },
        {
          width: 1200,
          height: 1200,
        }
      ),
      image(
        { format: 'product', imageType: Occ.ImageType.GALLERY, galleryIndex: 3 },
        {
          width: 480,
          height: 480,
        }
      ),
      image(
        { format: 'thumbnail', imageType: Occ.ImageType.GALLERY, galleryIndex: 3 },
        {
          width: 180,
          height: 180,
        }
      ),
    ],
    baseProduct: `BASE_${faker.string.numeric(6)}`,
    price: createPrice(),
    purchasable: true,
    url: faker.internet.url(),
    stock: createProductStock(),
    ...additionalData,
  };
};

/**
 * Gets a Full Set of Product Data
 */
export const createFullProduct = (additionalData?: Occ.Product): Occ.Product => {
  return {
    ...createBaseProduct(),
    availableForPickup: true,
    averageRating: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    baseOptions: [createBaseOption()],
    categories: [createProductCategory(), createProductCategory(), createProductCategory()],
    classifications: [createProductClassification(), createProductClassification(), createProductClassification()],
    description: faker.commerce.productDescription(),
    futureStocks: [createFutureStock()],
    manufacturer: faker.company.name(),
    multidimensional: false,
    numberOfReviews: faker.number.int({ min: 0, max: 999 }),
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
