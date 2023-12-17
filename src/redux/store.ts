import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    productStore : productReducer,
  },
});




export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;