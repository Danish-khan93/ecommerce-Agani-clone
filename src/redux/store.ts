import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import authReducer from "./features/auth/authSLice";
import cartReducer from "./features/Cart/cartSlice";
export const store = configureStore({
  reducer: {
    productStore: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
