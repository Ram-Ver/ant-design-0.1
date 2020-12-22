const CartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { cartData: action.payload }];

    case "REMOVE_TO_CART": {
      const data = state.filter(
        (item, index) => index !== action.payload.index
      );
      console.log(data, "filtered data");
      return [...data];
    }

    case "REMOVE_ALL":
      return [];

    default:
      return state;
  }
};

export default CartReducer;
