import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ axiosPublic,loginData,navigate}, thunkAPI) => {
    try {
      const { data } = await axiosPublic.post("/auth/login/",loginData);
      navigate("/");
      toastSuccessNotify("Successfully Logged-In");
      return data;
    } catch (error) {
      toastErrorNotify(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
