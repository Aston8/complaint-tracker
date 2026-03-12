import express from "express"

import {
  createComplaint,
  getMyComplaints,
  getDepartmentComplaints,
  updateComplaintStatus
} from "../controllers/complaintController.js"

import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

// CREATE COMPLAINT
router.post("/create", authMiddleware, createComplaint)

// GET STUDENT COMPLAINTS
router.get("/my", authMiddleware, getMyComplaints)

// GET ADMIN DEPARTMENT COMPLAINTS
router.get("/department", authMiddleware, getDepartmentComplaints)

// UPDATE COMPLAINT STATUS
router.patch("/status/:id", authMiddleware, updateComplaintStatus)

export default router