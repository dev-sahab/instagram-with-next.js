"use client";
import PostCard from "@/components/postCard/PostCard.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./timelineApiSlice.js";
import { selectPost } from "./timelineSlice.js";

export default function Timeline() {
  const dispatch = useDispatch();
  const { post } = useSelector(selectPost);

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
          {post.length == 0 ? (
            <p>No Data Found!</p>
          ) : (
            post.map((item, index) => {
              if (post.length == 0) {
                return <p key={index}>Data Not Found</p>;
              } else {
                return <PostCard key={index} user={userInfo} postData={item}/>;
              }
            })
          )}
        </div>
      </div>
    </>
  );
}
