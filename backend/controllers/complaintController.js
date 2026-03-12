import Complaint from "../models/Complaint.js"

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
      sentiment: aiData.sentiment
    })

    res.json(complaint)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Error creating complaint"
    })

  }

}