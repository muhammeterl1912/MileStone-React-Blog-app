import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogState = createAsyncThunk(
  "blogs/getBlogs",
  async ({ axiosToken, endPoint, id }, thunkAPI) => {
    try {
      const { data } = await axiosToken.get(endPoint + id);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postBlogState = createAsyncThunk(
  "blogsPost",
  async ({ axiosToken, endPoint, blogData }, thunkAPI) => {
    try {
      const { data } = await axiosToken.post(endPoint, blogData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
