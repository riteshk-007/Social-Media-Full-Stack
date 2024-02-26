import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./User.Slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
