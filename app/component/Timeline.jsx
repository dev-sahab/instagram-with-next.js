"use client";
import PostCard from "@/components/postCard/PostCard.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./timelineApiSlice.js";

export default function Timeline() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const userInfo = {
    username: "shahab.insta",
    name: "Md Shahab Uddin",
    profileImg:
      "https://res.cloudinary.com/dtpp4gleq/image/upload/v1676271269/Shahab_jymhye.jpg",
  };

  return (
    <>
      <div className="post-wrapper">
        <div className="post-inner">
          <PostCard user={userInfo} />
          <PostCard user={userInfo} />
          <PostCard user={userInfo} />
        </div>
      </div>
    </>
  );
}
