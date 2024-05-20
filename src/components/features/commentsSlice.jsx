import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: false,
}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {}
});

export const {} = commentsSlice.actions

export default commentsSlice.reducer