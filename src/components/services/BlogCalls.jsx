import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogState = createAsyncThunk(
  "blogs/getBlogs",
  async ({ axiosToken, endPoint, id }, thunkAPI) => {
    try {
      const { data } = await axiosToken.get(endPoint + id);
console.log(data.data)
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Thunk action
export const postBlogState = createAsyncThunk(
  'blogs/postBlogs',
  async ({ axiosToken, endPoint, id, post }, thunkAPI) => {
    try {
      const url = `${endPoint}/${id}/${post}`;
      const { data } = await axiosToken.post(url);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);