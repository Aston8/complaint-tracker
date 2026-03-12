import express from "express"
import { createComplaint } from "../controllers/complaintController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/create", authMiddleware, createComplaint)

export default router