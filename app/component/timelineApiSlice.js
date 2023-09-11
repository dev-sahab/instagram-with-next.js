import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * @Desc Get All Post
 * @Route /api/post
 * @METHOD GET
 * @Access public
 */
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

/**
 * @Desc Create New Post
 * @Route /api/post
 * @METHOD POST
 * @Access public
 */
export const createPost = createAsyncThunk("post/createPost", async (data) => {
  // call api
  const response = await axios.post("http://localhost:3000/api/post", data);

  // data not found condition
  if (!response.data) {
    throw new Error("Data not created");
  }

  // return data
  return response.data;
});

/**
 * @Desc Delete Post
 * @Route /api/post?id=123
 * @METHOD DELETE
 * @Access public
 */
export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  // call api
  const response = await axios.delete(
    `http://localhost:3000/api/post?id=${id}`
  );

  // data not found condition
  if (!response.data) {
    throw new Error("Data not created");
  }

  // return data
  return response.data.post._id;
});
