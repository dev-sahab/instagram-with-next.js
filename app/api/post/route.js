import mongoDBConnection from "@/config/db.js";
import Post from "@/models/Post.js";
import { NextResponse } from "next/server.js";

/**
 * @Desc Get All Post
 * @Route /api/post
 * @METHOD GET
 * @Access public
 */
export const GET = async () => {
  try {
    await mongoDBConnection();

    const post = await Post.find();

    // response
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

/**
 * @Desc Create new Post
 * @Route /api/post
 * @METHOD POST
 * @Access public
 */
export const POST = async (request) => {
  try {
    await mongoDBConnection();

    const data = await request.json();

    const post = await Post.create({
      ...data,
    });

    return NextResponse.json({ message: "Post Created", post: post });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
