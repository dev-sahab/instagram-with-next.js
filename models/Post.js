import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    post: {
      type: String,
      trim: true,
      default: null,
    },
    location: {
      type: String,
      trim: true,
      default: null,
    },
    photos: {
      type: Array,
      required: true,
    },
    likes: {
      type: Number,
      default: null,
    },
    comments: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// export
export default mongoose.models.Post || mongoose.model("Post", PostSchema);
