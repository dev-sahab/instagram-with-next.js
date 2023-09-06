import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  // call api
  const response = await axios.get("http://localhost:3000/api/post");

  // data not found condition
  if (!response.data) {
    throw new Error("Data not found");
  }

  // return data
  return response.data;
});