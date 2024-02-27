import express from "express";
import {
  addListings,
  allListings,
  specificListing,
  editListing,
} from "../controllers/listingController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/add", protectRoute,addListings);
router.get("/all", allListings);
router.get("/:propertyId",protectRoute, specificListing);
router.post("/edit/:propertyId",protectRoute, editListing);
export default router;
