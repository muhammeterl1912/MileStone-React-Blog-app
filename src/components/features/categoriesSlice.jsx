import { createSlice } from '@reduxjs/toolkit'
import {getBlogCategories } from "../services/BlogCalls"
const initialState = {
  categories:[],
    loading: false,
    error: false,
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {}, extraReducers: (builder) => {
    builder
      .addCase(getBlogCategories.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBlogCategories.fulfilled, (state, { payload }) => {
    
        state.loading = false;
        state.categories = payload.data
        state.error = false;
      })
      .addCase(getBlogCategories.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })}
});

export const {} = categoriesSlice.actions

export default categoriesSlice.reducer