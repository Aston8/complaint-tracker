import Complaint from "../models/Complaint.js"


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
      department: aiData.department,
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


// GET STUDENT'S OWN COMPLAINTS
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

    const complaints = await Complaint
      .find({ department: req.user.department })
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
export const updateComplaintStatus = async (req, res) => {

  try {

    const { status } = req.body

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    res.json(complaint)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Error updating complaint status"
    })

  }

}