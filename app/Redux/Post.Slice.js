import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CreatePosts = createAsyncThunk(
  "post/create",
  async (post, thunkAPI) => {
    try {
      const res = await axios.post("/api/create", {
        content: post?.content,
        image: post?.image,
        userEmail: post?.userEmail,
      });
      if (res.data.status === 201) {
        return res.data.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
export const GetPosts = createAsyncThunk("post/get", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/api/create");
    if (res.data.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});
export const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreatePosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CreatePosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, action.payload];
    });
    builder.addCase(CreatePosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(GetPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(GetPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
export default PostSlice.reducer;
