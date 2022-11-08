import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import { usersReducer } from "./userReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: usersReducer,
});
export default rootReducer;
