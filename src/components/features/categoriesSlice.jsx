import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: false,
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {}
});

export const {} = categoriesSlice.actions

export default categoriesSlice.reducer