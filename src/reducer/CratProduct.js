import {
  setCartData,
  deleteCartData,
  getCartData,
  deleteCart,
} from "../Storage/localStorage";
export const CartProductReducer = (state = getCartData(), action) => {
  switch (action.type) {
    case "FETCH_CART_PRODUCT":
      let cartData;
      if (action.query === "increse") {
        cartData = setCartData(action.payload);
      } else if (action.query === "decrese" || action.query === "remove") {
        cartData = deleteCartData(action.payload, action.query);
      } else if (action.query === "delete") {
        cartData = deleteCart();
      }
      return cartData;
    default:
      return state;
  }
};
export const CartDataReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CART_DATA":
      return action.payload;
    default:
      return state;
  }
};
