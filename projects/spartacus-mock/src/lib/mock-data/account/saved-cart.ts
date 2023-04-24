import { getCart, getUserTypeById } from '../commerce/cart';
import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';

interface SavedCartResult {
  savedCartData: Occ.Cart;
}

export const savedCartResult = (
  cartId: string,
  userId: string,
  name?: string,
  description?: string
): SavedCartResult => {
  return {
    savedCartData: {
      ...getCart(cartId, getUserTypeById(userId), true),
      name: name ?? faker.commerce.department(),
      description: description ?? faker.lorem.sentences(2),
    },
  };
};
