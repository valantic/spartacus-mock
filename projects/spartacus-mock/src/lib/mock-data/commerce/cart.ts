import { Occ, Promotion, Stock } from '@spartacus/core';
import ImageType = Occ.ImageType;
import PriceType = Occ.PriceType;
import { mediaImage } from '../media/media-image';
import { Voucher } from '@spartacus/cart/base/root';

const productPrice = 60.35;

let cartQuantity = 0;
let activeVoucherId = '';

interface ProductAddToCart {
  code: string;
}

const emptyCartData = (): Occ.Cart => {
  return {
    // @ts-ignore
    type: 'cartWsDTO',
    appliedOrderPromotions: [],
    appliedProductPromotions: [],
    appliedVouchers: [],
    code: '0030424022',
    deliveryCost: {
      formattedValue: 'CHF 0,00',
      value: 0
    },
    deliveryItemsQuantity: 0,
    entries: [],
    guid: '473f8628-3467-4742-8dd7-043bb01ec91d',
    net: false,
    pickupItemsQuantity: 0,
    productDiscounts: {
      formattedValue: 'CHF 0,00',
      value: 0
    },
    subTotal: {
      formattedValue: 'CHF 0,00',
      value: 0
    },
    totalDiscounts: {
      formattedValue: 'CHF 0,00',
      value: 0
    },
    totalItems: 0,
    totalPrice: {
      currencyIso: 'CHF',
      formattedValue: 'CHF 0,00',
      value: 0
    },
    totalPriceWithTax: {
      currencyIso: 'CHF',
      formattedValue: 'CHF 0,00',
      value: 0
    },
    totalTax: {
      formattedValue: 'CHF 0,00',
      value: 0
    },
    totalTaxValues: [],
    user: {
      name: 'Anonymous',
      uid: 'anonymous'
    },
    potentialOrderPromotions: [],
    potentialProductPromotions: []
  }
}

const fullCartData = (cartGuid: string): Occ.Cart => {

  const vouchers: Voucher[] = [];
  const orderPromotions: Promotion[] = [];

  if (activeVoucherId) {
    vouchers.push({
      code: '1234',
      freeShipping: false,
      voucherCode: '1234',
    })

    orderPromotions.push({
      // @ts-ignore
      consumedEntries: [],
      description: 'Buy over $200.00 get $20.00 discount on cart',
      promotion: {
        code: 'order_threshold_fixed_discount_main',
        promotionType: 'Rule Based Promotion'
      }
    })
  }

  return {
    // @ts-ignore
    appliedOrderPromotions: [
      {
        consumedEntries: [],
        description: 'Buy over $200.00 get $20.00 discount on cart',
        promotion: {
          code: 'order_threshold_fixed_discount_main',
          promotionType: 'Rule Based Promotion'
        }
      }
    ],
    appliedProductPromotions: [],
    appliedVouchers: [],
    code: '0030424022',
    deliveryItemsQuantity: 1,
    entries: [
      {
        basePrice: {
          formattedValue: '$1,066.18',
          value: 1066.18
        },
        configurationInfos: [],
        entryNumber: 0,
        product: {
          availableForPickup: true,
          baseOptions: [],
          categories: [
            {
              code: '578',
              name: 'Digital SLR'
            },
            {
              code: 'brand_10',
              name: 'Canon'
            }
          ],
          code: '2054947',
          images: [
            mediaImage('hires', ImageType.PRIMARY, 3500, 3500),
            mediaImage('big', ImageType.PRIMARY, 675, 675),
            mediaImage('detail', ImageType.PRIMARY, 480, 480),
            mediaImage('compare', ImageType.PRIMARY, 110, 110),
            mediaImage('thumbnail', ImageType.PRIMARY, 90, 90),
          ],
          manufacturer: 'Canon',
          name: 'EOS 500D + 18-200mm IS',
          purchasable: true,
          stock: {
            isValueRounded: false,
            stockLevel: 671,
            stockLevelStatus: 'inStock'
          } as Stock,
          url: '/Open-Catalogue/Cameras/Digital-Cameras/Digital-SLR/EOS-500D-%2B-18-200mm-IS/p/2054947'
        },
        quantity: 1,
        statusSummaryList: [],
        totalPrice: {
          currencyIso: 'USD',
          formattedValue: '$1,066.18',
          value: 1066.18
        },
        updateable: true
      }
    ],
    guid: cartGuid,
    net: false,
    pickupItemsQuantity: 0,
    productDiscounts: {
      formattedValue: '$0.00'
    },
    subTotal: {
      currencyIso: 'USD',
      formattedValue: '$1,046.18',
      priceType: PriceType.BUY,
      value: 1046.18
    },
    totalDiscounts: {
      currencyIso: 'USD',
      formattedValue: '$20.00',
      priceType: PriceType.BUY,
      value: 20
    },
    totalItems: 1,
    totalPrice: {
      currencyIso: 'USD',
      formattedValue: '$1,046.18',
      priceType: PriceType.BUY,
      value: 1046.18
    },
    totalPriceWithTax: {
      currencyIso: 'USD',
      formattedValue: '$1,046.18',
      priceType: PriceType.BUY,
      value: 1046.18
    },
    totalTax: {
      currencyIso: 'USD',
      formattedValue: '$0.00',
      priceType: PriceType.BUY,
      value: 0
    },
    user: {
      name: 'Anonymous',
      uid: 'anonymous'
    },
    potentialOrderPromotions: [],
    potentialProductPromotions: [],
    totalUnitCount: 1
  }
}

export const getCart = (cartGuid: string): Occ.Cart => {
  if (cartGuid !== '' && cartQuantity > 0) {
    return fullCartData(cartGuid);
  } else {
    return emptyCartData()
  }
}

export const getCarts = (cartGuid: string): Occ.CartList => {
  if (cartGuid !== '' && cartQuantity > 0) {
    return { carts: [fullCartData(cartGuid)]};
  } else {
    return { carts: [emptyCartData()]}
  }
}

export const addToCart = (product: ProductAddToCart, quantity: number): Occ.CartModification => {
  cartQuantity = cartQuantity + quantity;

  return {
    entry: {
      cancellableQuantity: 0,
      configurationInfos: [],
      entryNumber: 0,
      product: {
        availableForPickup: false,
        baseOptions: [],
        categories: [
          {
            code: 'accessory',
            name: 'Zubehör'
          },
          {
            code: 'cutleryTray',
            name: 'Besteckauflagen'
          },
          {
            code: 'shopvisible',
            name: 'Zubehör im Shop sichtbar'
          }
        ],
        code: product.code,
        name: 'Vario-Besteckauflage',
        purchasable: false,
        stock: {
          // @ts-ignore
          isValueRounded: false,
          stockLevelStatus: 'inStock'
        },
        url: '/zubehoer/geschirrspueler/besteckauflagen/vario-besteckauflage--pW83586'
      },
      quantity: cartQuantity,
      returnableQuantity: 0,
      statusSummaryList: [],
      totalPrice: {
        currencyIso: 'CHF',
        value: quantity * productPrice
      }
    },
    quantity: cartQuantity,
    quantityAdded: quantity,
    statusCode: 'success'
  }
}

export const updateCart = (_cartId: string, entryNumber: number, quantity: number): Occ.CartModification => {
  let quantityAdded = 0;
  if (cartQuantity < quantity) {
    quantityAdded = 1;
  } else if (cartQuantity > quantity) {
    quantityAdded = -1;
  }

  cartQuantity = quantity;

  return {
    entry: {
      cancellableQuantity: 0,
      configurationInfos: [],
      entryNumber,
      product: {
        availableForPickup: false,
        baseOptions: [],
        categories: [
          {
            code: 'accessory',
            name: 'Zubehör'
          },
          {
            code: 'cutleryTray',
            name: 'Besteckauflagen'
          },
          {
            code: 'shopvisible',
            name: 'Zubehör im Shop sichtbar'
          }
        ],
        code: 'W83586',
        configurable: false,
        name: 'Vario-Besteckauflage',
        purchasable: false,
        stock: {
          // @ts-ignore
          isValueRounded: false,
          stockLevelStatus: 'inStock'
        },
        url: '/zubehoer/geschirrspueler/besteckauflagen/vario-besteckauflage--pW83586'
      },
      quantity,
      returnableQuantity: 0,
      statusSummaryList: [],
      totalPrice: {
        currencyIso: 'CHF',
        value: quantity * productPrice,
      }
    },
    quantity,
    quantityAdded,
    statusCode: 'success'
  }
}

export const deleteCart = () => {
  cartQuantity = 0;
}

export const addVoucher = (voucherId: string) => {
  activeVoucherId = voucherId;
}

export const deleteVoucher = () => {
  activeVoucherId = '';
}
