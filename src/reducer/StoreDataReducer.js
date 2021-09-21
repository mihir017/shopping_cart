const StoreDataReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_STORE_DATA":
      return action.payload;
    case "FETCH_SEARCH_DATA":
      return action.payload;
    case "FETCH_SHOES_DATA":
      return action.payload;
    case "FETCH_CLOTHE_DATA":
      return action.payload;
    case "FETCH_BOOK_DATA":
      return action.payload;
    case "FETCH_GADGET_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default StoreDataReducer;
