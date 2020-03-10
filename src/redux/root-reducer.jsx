import { combineReducers } from "redux";
import userReducer from "../redux/user/userReducer";
import cartReducer from "./cart/CartReducrer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
