import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import ComplaintCard from "../components/ComplaintCard"
import SubmitComplaint from "./SubmitComplaint"

function StudentDashboard() {

  const { token } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const fetchComplaints = async () => {

    try {

      const res = await fetch("http://localhost:3000/api/complaints", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await res.json()

      setComplaints(data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchComplaints()

  }, [])

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Student Dashboard
      </h1>

      <SubmitComplaint refresh={fetchComplaints} />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        My Complaints
      </h2>

      <div className="grid gap-4">

        {complaints.map((c) => (
          <ComplaintCard key={c._id} complaint={c} />
        ))}

      </div>

    </div>

  )

}

export default StudentDashboard