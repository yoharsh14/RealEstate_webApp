import Comment from "../models/Comment.js";


export const addComment = async (req, res) => {
  try {
    const { rating, userId, propertyId, commentText } = req.body;
    const newComment = new Comment({
      property: propertyId,
      user: userId,
      commentText: commentText,
      rating: rating,
    });
    if (newComment) {
      await newComment.save();
      res.status(200).json(newComment);
    }
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};
export const getComment = async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const currentComments = await Comment.find({
      property: { $eq: propertyId },
    });
    res.status(200).json(currentComments);
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { userId } = req.body;
    const comment = await Comment.findById(commentId);
    if (comment.user == userId) {
      await Comment.findByIdAndDelete(commentId);
      res.status(200).json({
        commentDeleted: true,
      });
    } else {
      res.status(404).json({
        error:
          "Comment Does not exist or You are not the creator of this comment",
      });
    }
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};
export const editComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { rating, commentText, userId } = req.body;
    let comment = await Comment.findById(commentId);
    const user = comment.user._id.toString();
    if (user === userId) {
      await Comment.findByIdAndUpdate(commentId,{ rating: rating, commentText: commentText });
      let comment = await Comment.findById(commentId);
      res.status(200).json(comment);
    } else
      res
        .status(404)
        .json({
          error:
            "Comment cannot be edited, either not exist or you are not the author",
        });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};
