import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "../../../component/types/responseAndStore";
type PRODUCTQUANTITY = {
  quantity: number;
  product: PRODUCT;
};

type CARTTYPE = {
  productInCart: PRODUCTQUANTITY[];
};
const initialState: CARTTYPE = {
  productInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingInCart: (state, action) => {
      const cartItem = state.productInCart.find(
        (value: PRODUCTQUANTITY) => value?.product?.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.productInCart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQunatity: (state, action) => {
      const cartItem = state.productInCart.find((value: PRODUCTQUANTITY) => {
        return value?.product?.id === action.payload;
      });

      cartItem && cartItem.quantity++;
    },
    decrementQunatity: (state, action) => {
      const cartItem = state.productInCart.find((value: PRODUCTQUANTITY) => {
        return value?.product?.id === action.payload;
      });

      cartItem && cartItem.quantity--;
    },
    removeProduct :(state,action)=>{
      const listRemaining = state.productInCart.filter((value : PRODUCTQUANTITY) => {
        return value?.product?.id !== action?.payload
      })
      state.productInCart = listRemaining
    }
  },
});

export default cartSlice.reducer;
export const { addingInCart, incrementQunatity, decrementQunatity,removeProduct } =
  cartSlice.actions;
