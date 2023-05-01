import { Occ } from '@spartacus/core';
import { faker } from '@faker-js/faker';
import { getCart, getUserTypeById } from '../commerce/cart';

export const savedCartResult = (
  cartId: string,
  userId: string,
  name?: string,
  description?: string
): Occ.SaveCartResult => {
  return {
    savedCartData: {
      ...getCart(cartId, getUserTypeById(userId), true),
      name: name ?? faker.commerce.department(),
      description: description ?? faker.lorem.sentences(2),
    },
  };
};
