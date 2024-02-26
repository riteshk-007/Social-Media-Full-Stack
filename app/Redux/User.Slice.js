import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { revalidatePath } from "next/cache";

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
export const userHistory = createAsyncThunk(
  "user/history",
  async (email, thunkAPI) => {
    try {
      const res = await axios.post("/api/history", {
        userEmail: email,
      });

      if (res.data.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
export const deleteHistory = createAsyncThunk(
  "user/deleteHistory",
  async (id, thunkAPI) => {
    try {
      const res = await axios.post("/api/delete", {
        id: id,
      });
      if (res.data.status === 200) {
        revalidatePath("/explore");
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
    builder.addCase(userHistory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(userHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteHistory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default userSlice.reducer;
