import { createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify"; 

export const loginUser = createAsyncThunk("loginUser", async () => {
  const { axiosPublic } = useAxios(); 
  try {
    const { data } = await axiosPublic.post("/auth/login/", );
    toastSuccessNotify("Successfully Logged-In");
    return data;
  } catch (error) {
    toastErrorNotify(error.message);
    throw error; 
  }
});
