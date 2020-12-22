import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: CartReducer,
});

export default rootReducer;
