import { createSlice } from "@reduxjs/toolkit";

export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {},
});
export default CommentSlice.reducer;
