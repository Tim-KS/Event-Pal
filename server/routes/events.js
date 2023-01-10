import express from "express";
import { getFeedEvents, getUserEvents, likeEvents } from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedEvents);
router.get("/:userId/events", verifyToken, getUserEvents);

// UPDATE
router.patch("/:id/like", verifyToken, likeEvents);

export default router;