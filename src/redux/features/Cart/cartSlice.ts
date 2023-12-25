import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingInCart: (state, action) => {
      console.log(action.payload, "=====");
      // const obj = {quantity:0,product: {}}
      // @ts-ignore
state.productInCart.push(action.payload)
      

      
    },
  },
});

export default cartSlice.reducer;
export const { addingInCart } = cartSlice.actions;



