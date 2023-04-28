import { faker } from '@faker-js/faker';
import { Occ, Promotion, Stock } from '@spartacus/core';
import { ActiveCartEntry, LOCAL_STORAGE_KEY, LocalStorageMockData } from '../../types';
import { mediaImage } from '../media/media-image';
import { OccOrderEntryExtended } from '../order/order';
import { createProduct } from '../products/product';

import ImageType = Occ.ImageType;
import PriceType = Occ.PriceType;

import OrderEntry = Occ.OrderEntry;
import { productPrice } from '../products/product-price';

export enum CartUserType {
  OCC_USER_ID_ANONYMOUS = 'anonymous',
  OCC_USER_ID_GUEST = 'guest',
  OCC_USER_ID_CURRENT = 'current',
}

interface ProductAddToCart {
  code: string;
}

const emptyCartData = (cartUserType: CartUserType): Occ.Cart => {
  return {
    // @ts-ignore
    type: 'cartWsDTO',
    appliedOrderPromotions: [],
    appliedProductPromotions: [],
    appliedVouchers: [],
    code: '0030424022',
    deliveryCost: {
      formattedValue: '$0,00',
      value: 0,
    },
    deliveryItemsQuantity: 0,
    entries: [],
    guid: '473f8628-3467-4742-8dd7-043bb01ec91d',
    net: false,
    pickupItemsQuantity: 0,
    productDiscounts: {
      formattedValue: '$0,00',
      value: 0,
    },
    subTotal: {
      formattedValue: '$0,00',
      value: 0,
    },
    totalDiscounts: {
      formattedValue: '$0,00',
      value: 0,
    },
    totalItems: 0,
    totalPrice: {
      currencyIso: 'USD',
      formattedValue: '$0,00',
      value: 0,
    },
    totalPriceWithTax: {
      currencyIso: 'USD',
      formattedValue: '$0,00',
      value: 0,
    },
    totalTax: {
      formattedValue: '$0,00',
      value: 0,
    },
    user: getUserForCart(cartUserType),
    potentialOrderPromotions: [],
    potentialProductPromotions: [],
  };
};

const wishlistCartData = (userType: CartUserType): Occ.Cart => {
  return {
    appliedOrderPromotions: [],
    appliedVouchers: [],
    code: '0010032010',
    deliveryItemsQuantity: 0,
    entries: [
      {
        basePrice: {
          formattedValue: '$1,066.18',
          value: 1066.18,
        },
        entryNumber: 0,
        product: {
          availableForPickup: true,
          baseOptions: [],
          code: 'product', // needs to match product ID for mock product /de/products/product
          images: [
            mediaImage('product-zoom', ImageType.PRIMARY, 900, 900),
            mediaImage('product-Summary', ImageType.PRIMARY, 440, 440),
            mediaImage('product-main', ImageType.PRIMARY, 240, 240),
            mediaImage('product-thumbnail', ImageType.PRIMARY, 150, 150),
            mediaImage('product-icon', ImageType.PRIMARY, 80, 80),
          ],
          manufacturer: 'Canon',
          name: 'Product 1',
          purchasable: true,
          stock: {
            isValueRounded: false,
            stockLevel: 671,
            stockLevelStatus: 'noStock',
            availableDate: new Date('2021-01-18T18:02:27+0000'),
          } as Stock,
          url: '/products/product',
        },
        quantity: 1,
        statusSummaryList: [],
        totalPrice: {
          currencyIso: 'USD',
          formattedValue: '$1,066.18',
          value: 1066.18,
        },
        updateable: true,
      },
    ],
    guid: '22579b1a-9bb8-4c34-82fa-c71bb402a4d5',
    net: false,
    pickupItemsQuantity: 0,
    productDiscounts: {
      formattedValue: '$0.00',
    },
    subTotal: {
      formattedValue: '$0.00',
    },
    totalDiscounts: {
      currencyIso: 'USD',
      formattedValue: '$0.00',
      priceType: PriceType.BUY,
      value: 0,
    },
    totalItems: 0,
    totalPrice: {
      currencyIso: 'USD',
      formattedValue: '$0.00',
      value: 0,
    },
    totalPriceWithTax: {
      currencyIso: 'USD',
      formattedValue: '$0.00',
      value: 0,
    },
    totalTax: {
      formattedValue: '$0.00',
      value: 0,
    },
    user: getUserForCart(userType),
    description: 'undefined',
    // name consists out of 'wishlist' and user id and must match user id from user.ts
    name: 'wishlist85c9e5b9-8924-474d-8f44-ec15b14c5888',
    potentialOrderPromotions: [],
    potentialProductPromotions: [],
    saveTime: new Date('2023-03-27T10:59:18+0000'),
  };
};

const savedCartData = (userType: CartUserType): Occ.Cart => {
  return {
    appliedOrderPromotions: [],
    appliedVouchers: [],
    code: '0010032010',
    deliveryItemsQuantity: 0,
    entries: [
      {
        basePrice: {
          formattedValue: '$1,066.18',
          value: 1066.18,
        },
        entryNumber: 0,
        product: {
          availableForPickup: true,
          baseOptions: [],
          code: 'product', // needs to match product ID for mock product /de/products/product
          images: [
            mediaImage('product-zoom', ImageType.PRIMARY, 900, 900),
            mediaImage('product-Summary', ImageType.PRIMARY, 440, 440),
            mediaImage('product-main', ImageType.PRIMARY, 240, 240),
            mediaImage('product-thumbnail', ImageType.PRIMARY, 150, 150),
            mediaImage('product-icon', ImageType.PRIMARY, 80, 80),
          ],
          manufacturer: 'Canon',
          name: 'Product 1',
          purchasable: true,
          stock: {
            isValueRounded: false,
            stockLevel: 671,
            stockLevelStatus: 'noStock',
            availableDate: new Date('2021-01-18T18:02:27+0000'),
          } as Stock,
          url: '/products/product',
        },
        quantity: 1,
        statusSummaryList: [],
        totalPrice: productPrice(),
        updateable: true,
      },
    ],
    guid: '22579b1a-9bb8-4c34-82fa-c71bb402a4d5',
    net: false,
    pickupItemsQuantity: 0,
    productDiscounts: productPrice(),
    subTotal: productPrice(),
    totalDiscounts: productPrice(),
    totalItems: 0,
    totalPrice: productPrice(),
    totalPriceWithTax: productPrice(),
    totalTax: productPrice(),
    user: getUserForCart(userType),
    description: 'undefined',
    // name consists out of 'wishlist' and user id and must match user id from user.ts
    name: 'saved1234',
    potentialOrderPromotions: [],
    potentialProductPromotions: [],
    saveTime: new Date('2023-03-27T10:59:18+0000'),
    totalUnitCount: faker.datatype.number({ min: 1, max: 99 }),
  };
};

const fullCartData = (cartGuid: string, userType: CartUserType, forceEntries?: boolean): Occ.Cart => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  const activeCartEntries = forceEntries ? [{ code: 'entry1', quantity: 1 }] : mockData.activeCartEntries;

  const totalQuantity = activeCartEntries.reduce((acc, entry) => {
    return acc + entry.quantity;
  }, 0);
  const entries: OrderEntry[] = activeCartEntries.map((entry, index) =>
    getCartOrderEntry(index, entry.code, entry.quantity, true)
  );

  let totalAmount = entries.reduce((acc, entry) => {
    return acc + (entry.totalPrice?.value || 0);
  }, 0);

  return {
    appliedOrderPromotions: [],
    appliedProductPromotions: [],
    appliedVouchers: mockData.activeVouchers,
    code: '0030424022',
    deliveryItemsQuantity: totalQuantity,
    entries,
    guid: cartGuid,
    net: false,
    pickupItemsQuantity: 0,
    productDiscounts: {
      formattedValue: '$0.00',
    },
    subTotal: {
      currencyIso: 'USD',
      formattedValue: `$${totalAmount}`,
      priceType: PriceType.BUY,
      value: totalAmount,
    },
    totalDiscounts: {
      currencyIso: 'USD',
      formattedValue: '$20.00',
      priceType: PriceType.BUY,
      value: 20,
    },
    totalItems: totalQuantity,
    totalPrice: {
      currencyIso: 'USD',
      formattedValue: `$${totalAmount}`,
      priceType: PriceType.BUY,
      value: totalAmount,
    },
    totalPriceWithTax: {
      currencyIso: 'USD',
      formattedValue: `$${totalAmount}`,
      priceType: PriceType.BUY,
      value: totalAmount,
    },
    totalTax: {
      currencyIso: 'USD',
      formattedValue: '$0.00',
      priceType: PriceType.BUY,
      value: 0,
    },
    user: getUserForCart(userType),
    potentialOrderPromotions: [],
    potentialProductPromotions: [],
    totalUnitCount: totalQuantity,
  };
};

export const getCart = (cartGuid: string, cartUserType: CartUserType, forceEntries?: boolean): Occ.Cart => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  if (cartGuid !== '' && (mockData.activeCartEntries.length > 0 || forceEntries)) {
    return fullCartData(cartGuid, cartUserType, forceEntries);
  } else {
    return emptyCartData(cartUserType);
  }
};

export const getCarts = (cartUserType: CartUserType): Occ.CartList => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;
  const cartsArray = [];

  if (mockData.activeCartEntries.length > 0) {
    cartsArray.push(fullCartData('', cartUserType));
  } else {
    cartsArray.push(emptyCartData(cartUserType));
  }

  if (cartUserType === CartUserType.OCC_USER_ID_CURRENT) {
    cartsArray.push(wishlistCartData(cartUserType));
    cartsArray.push(savedCartData(cartUserType));
  }

  return { carts: cartsArray };
};

export const addToCart = (product: ProductAddToCart, quantity: number): Occ.CartModification => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;
  let activeCartEntries = mockData.activeCartEntries;
  let activeCartEntry = activeCartEntries.find((entry: ActiveCartEntry) => entry.code === product.code);

  if (activeCartEntry) {
    activeCartEntry.quantity += quantity;

    activeCartEntries = activeCartEntries.filter((activeCartEntry: ActiveCartEntry) => {
      return activeCartEntry.code !== product.code;
    });
  } else {
    activeCartEntry = { code: product.code, quantity: quantity };
  }

  mockData = {
    ...mockData,
    activeCartEntries: [...activeCartEntries, activeCartEntry],
  };

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));

  return {
    entry: getCartOrderEntry(0, product.code, activeCartEntry.quantity),
    quantity: quantity,
    quantityAdded: quantity,
    statusCode: 'success',
  };
};

export const updateEntries = (_cartId: string, entryNumber: number, quantity: number): Occ.CartModification => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;
  let activeCartEntries = mockData.activeCartEntries;
  let activeCartEntry = activeCartEntries[entryNumber];

  let quantityAdded = 0;
  if (activeCartEntry.quantity < quantity) {
    quantityAdded = 1;
  } else if (activeCartEntry.quantity > quantity) {
    quantityAdded = -1;
  }

  activeCartEntry.quantity += quantityAdded;

  mockData = {
    ...mockData,
    activeCartEntries: [...activeCartEntries],
  };

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));

  return {
    entry: getCartOrderEntry(0, activeCartEntry.code, activeCartEntry.quantity),
    quantity: activeCartEntry.quantity,
    quantityAdded,
    statusCode: 'success',
  };
};

export const removeEntries = (_cartId: string, entryNumber: number) => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;
  let activeCartEntries = mockData.activeCartEntries;
  let activeCartEntry = activeCartEntries[entryNumber];
  const productCode = activeCartEntry.code;

  activeCartEntries = activeCartEntries.filter((activeCartEntry: ActiveCartEntry) => {
    return activeCartEntry.code !== productCode;
  });

  mockData = {
    ...mockData,
    activeCartEntries,
  };

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
};

export const deleteCart = () => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  mockData = {
    ...mockData,
    activeCartEntries: [],
  };

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
};

export const setGuestCheckout = (newState: boolean) => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  mockData = {
    ...mockData,
    isGuestCheckout: newState,
  };

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockData));
};

export const getUserForCart = (userType?: CartUserType) => {
  let mockData = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') as LocalStorageMockData;

  if (mockData.isGuestCheckout) {
    userType = CartUserType.OCC_USER_ID_GUEST;
  }

  switch (userType) {
    case CartUserType.OCC_USER_ID_GUEST:
      return {
        name: userType,
        uid: '780da81b-f797-4274-b2a7-aa879808e6a7|' + faker.internet.email(),
      };
    case CartUserType.OCC_USER_ID_CURRENT:
      return {
        name: 'Hans Muster',
        uid: 'hans.muster@gmail.com',
      };
    default:
      return {
        name: CartUserType.OCC_USER_ID_ANONYMOUS,
        uid: CartUserType.OCC_USER_ID_ANONYMOUS,
      };
  }
};

export const getUserTypeById = (userId: string): CartUserType => {
  switch (userId) {
    case CartUserType.OCC_USER_ID_GUEST:
      return CartUserType.OCC_USER_ID_GUEST;
    case CartUserType.OCC_USER_ID_CURRENT:
      return CartUserType.OCC_USER_ID_CURRENT;
    default:
      return CartUserType.OCC_USER_ID_ANONYMOUS;
  }
};

function getCartOrderEntry(
  index: number,
  productCode: string,
  quantity: number,
  isFullCartRequest?: boolean
): OccOrderEntryExtended {
  const price = faker.commerce.price(100, 10000, 0, '');
  const priceNumber = getPriceWithDecimals(price);

  let orderEntry: OccOrderEntryExtended = {
    cancellableQuantity: 0,
    configurationInfos: [],
    entryNumber: index,
    product: createProduct({ code: productCode }),
    quantity,
    returnableQuantity: 0,
    statusSummaryList: [],
    totalPrice: {
      currencyIso: 'USD',
      formattedValue: `$${priceNumber}`,
      value: priceNumber,
    },
  };

  // updateable needs to be set to true to enable the item counter in the add to cart dialog
  if (isFullCartRequest) {
    orderEntry = {
      ...orderEntry,
      basePrice: {
        formattedValue: `$${priceNumber}`,
        value: priceNumber,
      },
      updateable: true,
    };
  }

  return orderEntry;
}

export function getPriceWithDecimals(price: string): number {
  let decimalsNumber = faker.datatype.number({ min: 0, max: 99 });

  return parseFloat(`${price}.${decimalsNumber === 0 ? '00' : decimalsNumber}`);
}
