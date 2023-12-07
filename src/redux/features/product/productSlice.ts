import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT_PRODUCTS } from "../../../Api/EndPoints";
export const getAllProduct2 = createAsyncThunk(
  "getAllProduct/products",
  async () => {
    try {
      const data = await axios.get(`${END_POINT_PRODUCTS}?limit=8`);
      console.log(data?.data?.products);

      return data?.data?.products;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  products: [{}],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProduct2.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },

  reducers: {
    // @ts-ignore
    getAllProduct: (state, action) => {
      console.log(state);
    },
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
