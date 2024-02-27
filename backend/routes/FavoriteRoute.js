import express from "express";
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from "../controllers/FavoriteController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/add/:propertyId",protectRoute, addFavorite);
router.get("/:userId",protectRoute, getFavorite);
router.delete("/delete",protectRoute, deleteFavorite);

export default router;
