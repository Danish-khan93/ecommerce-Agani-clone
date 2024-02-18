import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/Cart/cartSlice";
export const store = configureStore({
  reducer: {
    productStore: productReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
