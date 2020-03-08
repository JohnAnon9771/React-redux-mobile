export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}

export function removeToCart(id) {
  return {
    type: '@cart/REMOVE_TO_CART',
    id,
  };
}
