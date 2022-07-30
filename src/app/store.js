import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import streamReducer from "../features/stream/streamSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    streams: streamReducer,
  },
});
