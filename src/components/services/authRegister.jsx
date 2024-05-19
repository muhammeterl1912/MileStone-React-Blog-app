import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ registerData, navigate, axiosPublic }, thunkAPI) => {
    try {
      const response = await axiosPublic.post("/users/", registerData);
      navigate("/");
      toastSuccessNotify("Successfully Registered");
      return response.data;
    } catch (error) {
      toastErrorNotify("Registration Failed");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);