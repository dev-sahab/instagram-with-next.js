import mongoDBConnection from "@/config/db.js";
import Post from "@/models/Post.js";
import { NextResponse } from "next/server.js";

export const GET = async () => {
  try {
    await mongoDBConnection();

    const post = await Post.find();

    // response
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
