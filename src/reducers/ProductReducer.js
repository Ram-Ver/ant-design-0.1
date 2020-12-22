const initialState = {
  product: [],
  loader: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...state, product: action.payload, loader: false };
    case "PRODUCT_DETAIL":
      return { ...state, productDetail: action.payload };
    case "FETCH_PRODUCT_DETAIL":
      return { ...state, fetchProuctDetail: action.payload };
    case "PRODUCT_LOW_TO_HIGH":
      return { ...state, product: action.payload };
    case "HIGH_TO_LOW_PRODUCT":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export default productReducer;
