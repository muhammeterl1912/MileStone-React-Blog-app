import { createSlice } from '@reduxjs/toolkit';
import { getSingleCommentsState,postBlogComment} from "../services/BlogCalls";

const initialState = {
  comments: [],
  singleBlogComment:null,
  postedComment :null,
  loading: false,
  error: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleCommentsState.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getSingleCommentsState.fulfilled, (state, { payload }) => {

        state.loading = false;
        state.singleBlogComment = payload; 
        state.error = false;
      })
      .addCase(getSingleCommentsState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })      .addCase(postBlogComment.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postBlogComment.fulfilled, (state, { payload }) => {

        state.loading = false;
        state.postedComment  = payload; 
        state.error = false;
      })
      .addCase(postBlogComment.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default commentsSlice.reducer;