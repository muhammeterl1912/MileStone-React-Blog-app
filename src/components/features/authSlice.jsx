import { createSlice } from "@reduxjs/toolkit";
import useAuthCalls from "../hooks/useAuthCalls";

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
};

const { loginUser } = useAuthCalls(); 

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { /* actions */ } = authSlice.actions;
export default authSlice.reducer;
