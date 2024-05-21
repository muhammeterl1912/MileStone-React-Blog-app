import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosToken}from "../../libs/axios"

const endpoint = {
  blogs:"blogs?page=",
  comments:"comments/",
  blogDetail:"blogs/"
}



export const getBlogState = createAsyncThunk(
  "blogs/getBlogs",
  async ({currentPage},{rejectWithValue}) => {
    console.log(currentPage,"weweeeid")
    try {
      const { data } = await axiosToken.get(endpoint.blogs +currentPage+"&limit=4");
console.log(data.data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getBlogStateDetail = createAsyncThunk(
  "details/getBlogs",
  async (  id ,{rejectWithValue}) => {
    try {
      const { data } = await axiosToken.get(endpoint.blogDetail + id);
console.log(data.data)
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCommentsState = createAsyncThunk(
  "comments/getComments",
  async ({ axiosToken, endPoint, id }, thunkAPI) => {
    try {
      let url = `${endPoint}`;
      if (id) { 
        url += `/${id}`;
      }
      const { data } = await axiosToken.get(url);
      
      return data.data;
    } catch (error) {
      console.log('Error message:', error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const postBlogState = createAsyncThunk(
  'blogs/postBlogs',
  async ({ axiosToken, endPoint, id, post }, thunkAPI) => {
    try {
      
      
      const url = `${endPoint}/${id}/${post}`;
      const { data } = await axiosToken.post(url);

      return data.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
