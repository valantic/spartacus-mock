import { address } from './address';
import { cart } from './cart/cart';
import { importExport } from './cart/import-export';
import { quickOrder } from './cart/quick-order';
import { savedCart } from './cart/saved-cart';
import { wishlist } from './cart/wish-list';
import { checkout } from './checkout/checkout';
import { common } from './common';
import { myAccount } from './my-account';
import { order } from './order/order';
import { payment } from './payment';
import { pdf } from './pdf';
import { product } from './product';
import { bulkPricing } from './product/bulk-pricing';
import { productImageZoom } from './product/product-image-zoom';
import { pwa } from './pwa';
import { storeFinder } from './store-finder/store-finder';
import { user } from './user';
import { userAccount } from './user/user-account';
import { userProfile } from './user/user-profile';
import { video } from './video';

export const languageEn = {
  address,
  common,
  myAccount,
  payment,
  product,
  pwa,
  user,
  video,
  pdf,

  // feature libraries
  cart,
  importExport,
  quickOrder,
  savedCart,
  wishlist,
  checkout,
  order,
  bulkPricing,
  productImageZoom,
  storeFinder,
  userAccount,
  userProfile,
};
