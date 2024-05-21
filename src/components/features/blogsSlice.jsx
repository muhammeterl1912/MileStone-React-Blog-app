import { createSlice } from "@reduxjs/toolkit";
import { getBlogState } from "../services/BlogCalls";

const initialState = {
  blogs: [],
  singleBlog: null,
  loading: false,
  error: false,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogState.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBlogState.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (Array.isArray(payload)) {
          state.loading = false;
          state.blogs = payload;
          state.singleBlog = null;
        } else {
          state.loading = false;
          state.singleBlog = payload;
          state.blogs = [];
        }
        state.error = false;
      })
      .addCase(getBlogState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {} = blogsSlice.actions;

export default blogsSlice.reducer;
