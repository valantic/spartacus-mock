import { faker } from '@faker-js/faker';
import { ImageType, Occ } from '@spartacus/core';
import { productCategories } from './product-categories';
import { mediaImage } from '../media/media-image';
import { productPrice } from './product-price';

export enum ProductStyle {
  BASE = 'BASE',
  ADVANCED = 'ADVANCED',
}

export const activeTabItems = [
  // TODO add tab IDs
]

interface OccProductExtended extends Occ.Product {
  displayedTabs: string[];
}

export const product = (
  productCode: string,
  _productIndex: number = 1,
): OccProductExtended => {
  const productName = faker.commerce.productName();

  const purchasable = true;

  return {
    // Scope List / Default properties
    code: productCode,
    name: productName,
    price: productPrice(),
    images: [
      mediaImage('hires', ImageType.PRIMARY, 3500, 3500),
      mediaImage('big', ImageType.PRIMARY, 675, 675),
      mediaImage('detail', ImageType.PRIMARY, 480, 480),
      mediaImage('compare', ImageType.PRIMARY, 110, 110),
      mediaImage('thumbnail', ImageType.PRIMARY, 90, 90),
    ],

    // Scope Details
    availableForPickup: true,
    averageRating: 4.541666666666667,
    categories: productCategories(),
    description: `<p>${faker.commerce.productDescription()}</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`,
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
