import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import productReducer from "./slice/ProductSlice";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});