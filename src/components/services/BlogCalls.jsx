import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosToken } from "../../libs/axios";

const endpoint = {
  blogs: "blogs?page=",
  comments: "comments/",
  blogDetail: "blogs/",
  categories: "categories/",
};

export const getBlogState = createAsyncThunk(
  "blogs/getBlogs",
  async ({ endPoint, currentPage, paginate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosToken.get(`${endPoint}${currentPage}${paginate}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBlogStateDetail = createAsyncThunk(
  "details/getBlogs",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosToken.get(endpoint.blogDetail + id);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSingleCommentsState = createAsyncThunk(
  "comments/getComments",
  async (id, thunkAPI) => {
    try {
      let url = `${endpoint.blogDetail}`;
      if (id) {
        url += `/${id}`;
      }
      const { data } = await axiosToken.get(url);

      return data.data.comments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const postBlogLike = createAsyncThunk(
  "blogs/postBlogLike",
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosToken.post(
        `${endpoint.blogDetail}/${id}/postLike`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const postBlogComment = createAsyncThunk(
  "comments/postComment",
  async (postComment, thunkAPI) => {
    try {
      const data = await axiosToken.post(endpoint.comments, postComment);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getBlogCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const data = await axiosToken(endpoint.categories);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const postBlogState = createAsyncThunk(
  "blogs/postBlogNew",
  async (postData, thunkAPI) => {
    try {
   
      const { data } = await axiosToken.post(endpoint.blogDetail,postData);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const deleteSingleBlog = createAsyncThunk(
  "blogs/deleteSingleBlog",
  async (id, thunkAPI) => {
    try {
   
      const  data  = await axiosToken.delete(endpoint.blogDetail+id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getUserBlogs = createAsyncThunk(
  "blogs/getUserBlogs",
  async (endpoint, { rejectWithValue }) => {
    try {
      const { data } = await axiosToken.get(endpoint);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const putUpdateBlogs = createAsyncThunk(
  "blogs/putUpdateBlogs",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const { data } = await axiosToken.put(`/blogs/${id}`, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
