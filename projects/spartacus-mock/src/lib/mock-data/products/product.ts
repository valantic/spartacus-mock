import { faker } from '@faker-js/faker';
import { ImageType, Occ } from '@spartacus/core';
import { productCategories } from './product-categories';
import { mediaImage } from '../media/media-image';
import { productPrice } from './product-price';
import { productClassification } from './product-classification';

export const activeTabItems = [
  'ProductDetailsTabComponent',
  'ProductSpecsTabComponent',
  'ProductReviewsTabComponent',
  'deliveryTab',
];

interface OccProductExtended extends Occ.Product {
  displayedTabs: string[];
}

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
    categories: productCategories(),
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
