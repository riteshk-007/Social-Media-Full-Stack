import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./User.Slice";
import PostSlice from "./Post.Slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    post: PostSlice,
  },
});
