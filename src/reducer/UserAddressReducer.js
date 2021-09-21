const UserAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_ADDRESS":
      //   console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default UserAddressReducer;
