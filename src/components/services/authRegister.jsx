import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { axiosPublic } from "../../libs/axios";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ registerData, navigate }, thunkAPI) => {
    try {
      const { data } = await axiosPublic.post("users/", registerData);

      navigate("/");
      toastSuccessNotify("Successfully Registered");
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        toastErrorNotify("Registration Failed");
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        toastErrorNotify("An unexpected error occurred");
        return thunkAPI.rejectWithValue({ error: "Unexpected error" });
      }
    }
  }
);
