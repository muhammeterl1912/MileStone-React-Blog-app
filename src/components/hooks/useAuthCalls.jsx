import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import { createAsyncThunk } from "@reduxjs/toolkit";
const useAuthCalls = () => {
  const loginUser = createAsyncThunk("loginUser", async () => {
    try {
      const { data } = await axiosPublic.post("/auth/login/", userLoginData);
      toastSuccessNotify("Successfully Logged-In");
      return data;
    } catch (error) {
      toastErrorNotify(error.message);
    }
  });
  return { loginUser };
};

export default useAuthCalls;
