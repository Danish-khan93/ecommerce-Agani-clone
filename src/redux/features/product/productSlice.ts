import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { END_POINT_PRODUCTS } from "../../../Api/EndPoints";
export const getAllProduct = createAsyncThunk(
  "getAllProduct/products",
  async (
    { limit, skip=0 }: { limit: number; skip: number },
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

// catagory filter

// export const catagoryFilter  =createAsyncThunk("catagoryFilter",async(filter,{rejectWithValue})=>{
//   console.log(filter);

// try {
//   const data = await axios.get(`https://dummyjson.com/products/category/${filter}`);
//   console.log(data?.data);

//   return data?.data;
// } catch (error) {
//   return rejectWithValue(error)
// }
// })

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
      state.products = action.payload;
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      // @ts-ignore
      state.isError = action.payload;
    });
    // catagory filter
    // builder.addCase(catagoryFilter.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(catagoryFilter.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // @ts-ignore
    //   state.category = action.payload;
    // });
    // builder.addCase(catagoryFilter.rejected, (state, action) => {
    //   // @ts-ignore
    //   state.isError = action.payload;
    // });
  },

  reducers: {
    // @ts-ignore
    // getAllProduct: (state, action) => {
    //   console.log(state);
    // },
  },
});

// export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
