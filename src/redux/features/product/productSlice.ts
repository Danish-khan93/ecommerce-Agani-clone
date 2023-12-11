import { createAsyncThunk, createSlice ,} from "@reduxjs/toolkit";
import axios from "axios";
// import { END_POINT_PRODUCTS } from "../../../Api/EndPoints";
export const getAllProduct = createAsyncThunk(
  "getAllProduct/products",
  async ({limit}:{limit:number},{rejectWithValue}) => {
    try {
      console.log(limit);
      
      const data = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
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
