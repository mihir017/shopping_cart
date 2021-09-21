const SingleProductReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT":
      // console.log(action.payload);
      return [action.payload];
    default:
      return state;
  }
};

export default SingleProductReducer;
