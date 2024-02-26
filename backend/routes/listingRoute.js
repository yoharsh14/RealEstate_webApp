import express from "express";
import {
  addListings,
  allListings,
  specificListing,
  editListing,
} from "../controllers/listingController.js";
const router = express.Router();

router.post("/add", addListings);
router.get("/all", allListings);
router.get("/:propertyId", specificListing);
router.post("/edit/:propertyId", editListing);
export default router;
