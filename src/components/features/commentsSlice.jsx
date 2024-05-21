import { createSlice } from '@reduxjs/toolkit';
import { getCommentsState } from "../services/BlogCalls";

const initialState = {
  comments: [],
  loading: false,
  error: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsState.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCommentsState.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.comments = payload; 
        state.error = false;
      })
      .addCase(getCommentsState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default commentsSlice.reducer;