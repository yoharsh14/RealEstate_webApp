import express from "express";
import {
  addFavorite,
  deleteFavorite,
} from "../controllers/FavoriteController.js";
const router = express.Router();

router.post("/add/:propertyId", addFavorite);
router.delete("/delete/:propertyId", deleteFavorite);

export default router;
