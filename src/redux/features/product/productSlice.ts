import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  PRODUCTSTORE,
  URLPARAM,
} from "../../../component/types/responseAndStore";
export const getAllProduct = createAsyncThunk(
  "getAllProduct/products",
  async (urlParams: URLPARAM, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        // `https://dummyjson.com/products?limit=${urlParams.limit}&skip=${urlParams.skip}`
        `${import.meta.env.VITE_PRODUCT_URL}?limit=${urlParams.limit}&skip=${urlParams.skip}`
      );

      return data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: PRODUCTSTORE = {
  products: [],
  isLoading: true,
  isError: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = [...state.products, ...action.payload.products];
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.isError = action.payload;
    });
  },

  reducers: {},
});

// export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
