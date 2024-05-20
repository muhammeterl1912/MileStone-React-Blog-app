import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/authLogin";
import { registerUser } from "../services/authRegister";
import { logOutUser } from "../services/authLogout"; 

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state,{payload}) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = ""; 
        state.token = ""; 
      })
      .addCase(logOutUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
