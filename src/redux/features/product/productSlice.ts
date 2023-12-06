import { 
    // createAsyncThunk,
     createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { END_POINT_PRODUCTS } from "../../../Api/EndPoints";
// const getAllProduct2 = createAsyncThunk("getAllProduct", async () => {
//   try {
//     const data = await axios
//       .get(`${END_POINT_PRODUCTS}?limit=8`)
//       .then((res) => {
//         return res.data.products;
//       });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProduct:  (state, action) => {
      console.log(state);
     ;
    },
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
