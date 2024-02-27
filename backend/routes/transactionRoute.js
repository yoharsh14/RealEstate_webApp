import express from "express";
import {
  transact,
  getAllTheTrasaction,
  getSpecific,
} from "../controllers/transactionController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/transact",protectRoute, transact);
router.get("/all",protectRoute, getAllTheTrasaction);
router.get("/userTransaction/:userId",protectRoute, getSpecific);

export default router;
