import { createSlice } from "@reduxjs/toolkit";
import { getBlogState,getBlogStateDetail,postBlogLike } from "../services/BlogCalls";

const initialState = {
  blogs: [],
  singleBlog: null,
  totalPage:1,
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
        state.totalPage = payload.details.pages.total
        state.blogs = payload.data;
        state.error = false;
      })
      .addCase(getBlogState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(postBlogLike.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postBlogLike.fulfilled, (state, { payload }) => {
    
        state.loading = false;
        state.error = false;
        state.isLiked = payload
      })
      .addCase(postBlogLike.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getBlogStateDetail.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getBlogStateDetail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.singleBlog = payload
      })
      .addCase(getBlogStateDetail.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {} = blogsSlice.actions;

export default blogsSlice.reducer;
