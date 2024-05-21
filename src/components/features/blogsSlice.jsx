import { createSlice } from "@reduxjs/toolkit";
import { getBlogState, postBlogState } from "../services/BlogCalls";

const initialState = {
  blogs: [],
  singleBlog: null,
  isLiked: null,
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
          state.blogs = payload;
          state.singleBlog = null;
        } else {
          state.singleBlog = payload;
          state.blogs = [];
        }
        state.error = false;
      })
      .addCase(getBlogState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(postBlogState.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postBlogState.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.isLiked = payload
      })
      .addCase(postBlogState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {} = blogsSlice.actions;

export default blogsSlice.reducer;
