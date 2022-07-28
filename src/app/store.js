import { configureStore } from "@reduxjs/toolkit";
import { authReducer, feedReducer } from "../features";

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    feed: feedReducer,
  },
});
