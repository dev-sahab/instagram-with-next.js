import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/app/component/timelineSlice.js";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  devTools: true,
});

// export store
export default store;
