import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createComment = createAsyncThunk(
  "comment/create",
  async (comment, thunkAPI) => {
    console.log(comment, "comment");
    try {
      const res = await axios.post("/api/post-comment", {
        content: comment?.content,
        postId: comment?.postId,
        userEmail: comment?.userEmail,
      });
      if (res.data.status === 201) {
        return res.data.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.loading = false;
      state.comment = [...state.comment, action.payload];
    });
    builder.addCase(createComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
export default CommentSlice.reducer;
