import { createAsyncThunk } from "@reduxjs/toolkit";



export const getBlogState = createAsyncThunk(
  "blogsGet",
  async ({axiosToken,endPoint,pages}, thunkAPI) => {
    try {
      const { data } = await axiosToken(endPoint+pages);
      return data.data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postBlogState = createAsyncThunk(
  "blogsPost",
  async ({axiosToken,endPoint,blogData}, thunkAPI) => {
    try {
      const { data } = await axiosToken.post(endPoint,blogData);
  
      return data;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
