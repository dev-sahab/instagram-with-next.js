const { createSlice } = require("@reduxjs/toolkit");

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {},
});

// export selector
export const selectPost = (state) => state.posts;
// export actions
export const {} = postSlice.actions;

// export reducer
export default postSlice.reducer;
