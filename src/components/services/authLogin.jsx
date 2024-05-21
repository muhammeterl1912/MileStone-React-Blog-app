import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import {axiosToken} from "../../libs/axios"
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ loginData,navigate}, thunkAPI) => {
    try {
      const { data } = await axiosToken.post("/auth/login/",loginData);
      navigate("/");
      toastSuccessNotify("Successfully Logged-In");
      return data;
    } catch (error) {
      toastErrorNotify("Wrong Password...");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
