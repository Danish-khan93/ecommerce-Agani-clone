import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { INITIALSTATETYPE } from "../../../component/types/authType";
import { FORMTYPESIGNUP } from "../../../component/types/formType";
import axios from "axios";
export const authentication = createAsyncThunk(
  "auth",
  async (data: FORMTYPESIGNUP, { rejectWithValue }) => {
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://658084956ae0629a3f556047.mockapi.io/signup",
        data,
        { headers: config.header }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: INITIALSTATETYPE = {
  isLoading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authentication.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(authentication.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.userInfo = action.payload;
      state.userToken = action.payload.email;
      localStorage.setItem("userToken", JSON.stringify(state.userToken));
    });
    builder.addCase(authentication.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});


export default authSlice.reducer