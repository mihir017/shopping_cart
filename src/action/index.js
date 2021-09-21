import {
  getAllStoreData,
  getSingleProduct,
  getCartData,
  getSearchData,
  getSingleCartProduct,
} from "../Storage/localStorage";

export const fetchStoreData = () => {
  return {
    type: "FETCH_STORE_DATA",
    payload: getAllStoreData(),
  };
};
export const fetchSearchData = (query) => {
  return {
    type: "FETCH_SEARCH_DATA",
    payload: getSearchData(query),
  };
};

export const fetchShoesData = (query) => {
  return {
    type: "FETCH_SHOES_DATA",
    payload: getAllStoreData(query),
  };
};

export const fetchClotheData = (query) => {
  return {
    type: "FETCH_CLOTHE_DATA",
    payload: getAllStoreData(query),
  };
};

export const fetchBookData = (query) => {
  return {
    type: "FETCH_BOOK_DATA",
    payload: getAllStoreData(query),
  };
};

export const fetchGadgetData = (query) => {
  return {
    type: "FETCH_GADGET_DATA",
    payload: getAllStoreData(query),
  };
};

export const fetchSingleProduct = (productId) => {
  return {
    type: "FETCH_SINGLE_PRODUCT",
    payload: getSingleProduct(productId),
  };
};
export const fetchSingleCartProduct = (productId) => {
  return {
    type: "FETCH_SINGLE_PRODUCT",
    payload: getSingleCartProduct(productId),
  };
};

export const fetchCartProduct = (productId, query) => {
  return {
    type: "FETCH_CART_PRODUCT",
    payload: getSingleProduct(productId),
    query: query,
  };
};
export const fetchDeleteCart = (query) => {
  return {
    type: "FETCH_CART_PRODUCT",
    query: query,
  };
};

export const fetchCartData = () => {
  return {
    type: "FETCH_CART_DATA",
    payload: getCartData(),
  };
};

export const fetchUserAddress = ({
  fullName,
  email,
  phone_no,
  city,
  address,
  state,
  pinCode,
  paymentType,
}) => {
  const userAddress = {
    fullName,
    email,
    phone_no,
    city,
    address,
    state,
    pinCode,
    paymentType,
  };
  return {
    type: "FETCH_USER_ADDRESS",
    payload: userAddress,
  };
};
export const fetchPlaceOrder = (placeOrder) => {
  return {
    type: "FETCH_PLACE_ORDER",
    payload: placeOrder,
  };
};

// checkOut All Cart Product

export const fetchCheckOutData = (checkOutData) => {
  return {
    type: "FETCH_CHECKOUT_DATA",
    payload: checkOutData,
  };
};
