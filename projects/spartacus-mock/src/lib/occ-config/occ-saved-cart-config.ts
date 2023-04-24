interface SavedCartEndpoints {
  savedCarts?: string;
  savedCart?: string;
  restoreSavedCart?: string;
  cloneSavedCart?: string;
}

interface SavedCartConfig {
  backend: {
    occ: {
      endpoints: SavedCartEndpoints;
    };
  };
}

export const occSavedCartConfig: SavedCartConfig = {
  backend: {
    occ: {
      endpoints: {
        savedCarts:
          'users/${userId}/carts?savedCartsOnly=true&fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name,description)',
        savedCart: 'users/${userId}/carts/${cartId}/savedcart',
        restoreSavedCart: 'users/${userId}/carts/${cartId}/restoresavedcart',
        cloneSavedCart: 'users/${userId}/carts/${cartId}/clonesavedcart?name=${saveCartName}',
      },
    },
  },
};
