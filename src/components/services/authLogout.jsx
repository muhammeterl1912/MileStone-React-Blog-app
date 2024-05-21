import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import {axiosToken} from "../../libs/axios"
export const logOutUser = createAsyncThunk(
  "auth/logOut",
  async ({ navigate},thunkAPI) => {
    try {
      await axiosToken("/auth/logout/");

      toastSuccessNotify("User Successfully Logged-out.");
      navigate("/");
    } catch (error) {
      toastErrorNotify("User could not be Logged-out...")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
