import { createSlice } from '@reduxjs/toolkit';
import { getSingleCommentsState} from "../services/BlogCalls";

const initialState = {
  comments: [],
  singleBlogComment:null,
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
        console.log(payload,"commentnete")
        state.loading = false;
        state.singleBlogComment = payload; 
        state.error = false;
      })
      .addCase(getSingleCommentsState.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default commentsSlice.reducer;