import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./timelineApiSlice.js";


const timelineSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    showModal: false,
    message: null,
    error: null,
  },
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

// export selector
export const selectPost = (state) => state.posts;
// export actions
export const { setShowModal } = timelineSlice.actions;

// export reducer
export default timelineSlice.reducer;
