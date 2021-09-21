import { combineReducers } from "redux";
import StoreDataReducer from "./StoreDataReducer";
import SingleProductReducer from "./SingleProductReducer";
import { CartProductReducer, CartDataReducer } from "./CratProduct";
import UserAddressReducer from "./UserAddressReducer";
import { PlaceOrderReducer } from "./PlaceOrderReducer";

const reducer = combineReducers({
  storeData: StoreDataReducer,
  singleProduct: SingleProductReducer,
  cartProduct: CartProductReducer,
  cartData: CartDataReducer,
  placeOrder: PlaceOrderReducer,
  userAddress: UserAddressReducer,
});

export default reducer;
