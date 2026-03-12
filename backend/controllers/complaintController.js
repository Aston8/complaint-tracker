import Complaint from "../models/Complaint.js"
import User from "../models/User.js"


// CREATE COMPLAINT
export const createComplaint = async (req, res) => {

  try {

    const { complaint_text } = req.body

    const aiResponse = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ complaint_text })
    })

    const aiData = await aiResponse.json()

    const complaint = await Complaint.create({
      user: req.user.id,
      complaint_text,
      category: aiData.category,
      department: aiData.department.toLowerCase().trim(),
      priority: aiData.priority,
      sentiment: aiData.sentiment,
      status: "Pending"
    })

    res.json(complaint)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Error creating complaint"
    })

  }

}



// GET STUDENT COMPLAINTS
export const getMyComplaints = async (req, res) => {

  try {

    const complaints = await Complaint
      .find({ user: req.user.id })
      .sort({ createdAt: -1 })

    res.json(complaints)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Error fetching complaints"
    })

  }

}



// GET ADMIN DEPARTMENT COMPLAINTS
export const getDepartmentComplaints = async (req, res) => {

  try {

    // get admin from DB
    const user = await User.findById(req.user.id)

    const adminDept = user.department.toLowerCase().trim()

    const complaints = await Complaint.find({
      department: { $regex: adminDept, $options: "i" }
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 })

    res.json(complaints)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Error fetching department complaints"
    })

  }

}



// UPDATE COMPLAINT STATUS


// UPDATE COMPLAINT STATUS
export const updateComplaintStatus = async (req, res) => {

  try {

    const { status } = req.body

    console.log("Updating complaint:", req.params.id)
    console.log("New status:", status)

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    res.json(complaint)

  } catch (error) {

    console.log("Update error:", error)

    res.status(500).json({
      message: "Error updating complaint status"
    })

  }

}