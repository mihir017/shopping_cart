import { setPlaceOrder, getMyOrderData } from "../Storage/localStorage";

export const PlaceOrderReducer = (state = getMyOrderData(), action) => {
  switch (action.type) {
    case "FETCH_PLACE_ORDER":
      let placeOrderData;
      // console.log(action.payload);
      placeOrderData = setPlaceOrder(action.payload);
      return placeOrderData;
    default:
      return state;
  }
};
