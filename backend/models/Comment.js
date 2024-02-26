import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: ture },
  commentText: String,
  rating: { type: Number, min: 1, max: 5 },
  data: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
