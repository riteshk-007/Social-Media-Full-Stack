import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserSearch = createAsyncThunk(
  "user/search",
  async (search, thunkAPI) => {
    try {
      const res = await axios.post("/api/search", {
        search: search?.term,
        userEmail: search?.email,
      });
      if (res.data.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserSearch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UserSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(UserSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default userSlice.reducer;
