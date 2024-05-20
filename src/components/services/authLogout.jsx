import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

export const logOutUser = createAsyncThunk(
  "auth/logOut",
  async ({axiosToken, navigate},thunkAPI) => {
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
