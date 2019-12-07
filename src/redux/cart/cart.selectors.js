import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//gets cart items from state, and passes value to selectCartItemsCount reducer
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
  );
  
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
 );

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
)