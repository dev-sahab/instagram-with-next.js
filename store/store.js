import { configureStore } from "@reduxjs/toolkit";
import postReducer from "@/components/PostModal/postSlice.js";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
  devTools: true,
});

// export store
export default store;
