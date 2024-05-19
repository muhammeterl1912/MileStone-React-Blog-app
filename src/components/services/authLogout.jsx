import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

export const logOutUser = createAsyncThunk(
  "auth/logOut",
  async (_, navigate) => {
    const { axiosToken } = useAxios();
    try {
      await axiosToken("/auth/logout");

      toastSuccessNotify("User Successfully Logged-out.");
      navigate("/");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  }
);
