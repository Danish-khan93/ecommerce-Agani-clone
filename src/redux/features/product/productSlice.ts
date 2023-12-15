import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { END_POINT_PRODUCTS } from "../../../Api/EndPoints";
export const getAllProduct = createAsyncThunk(
  "getAllProduct/products",
  async (
    { limit, skip }: { limit: number; skip: number },
    { rejectWithValue }
  ) => {
    try {
      console.log(limit);

      const data = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      console.log(data?.data);

      return data?.data;
    } catch (error) {
      // console.log(error);

      return rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  // category:[],
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
      // @ts-ignore
      state.products = action.payload.products;
      // state.products.push( ...action.payload)
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      // @ts-ignore
      state.isError = action.payload;
    });
  },

  reducers: {},
});

// export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
