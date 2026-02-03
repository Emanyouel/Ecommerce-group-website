import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./checkoutSlice";
import bagReducer from "./bagSlice"; 




export const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    bag: bagReducer,
  },
});