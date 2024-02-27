import express from "express";
const router = express.Router();
import {
  getComment,
  addComment,
  deleteComment,
  editComment,
} from "../controllers/CommentController.js";
import { protectRoute } from "../middleware/protectRoute.js";
router.get("/get/:propertyId",protectRoute, getComment);
router.post("/add",protectRoute, addComment);
router.delete("/delete/:commentId",protectRoute, deleteComment);
router.put("/edit/:commentId",protectRoute, editComment);

export default router;
