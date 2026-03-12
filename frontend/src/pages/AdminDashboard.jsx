import { useEffect, useState, useContext } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { AuthContext } from "../context/AuthContext"

function AdminDashboard() {

  const { token } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const fetchComplaints = async () => {

    try {

      const res = await fetch(
        "http://localhost:3000/api/complaints/department",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      const data = await res.json()

      setComplaints(data)

    } catch (error) {

      console.log(error)

    }

  }

  const updateStatus = async (id, status) => {

  console.log("Updating:", id, status)

  try {

    const res = await fetch(
      `http://localhost:3000/api/complaints/status/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      }
    )

    const data = await res.json()

    console.log("Server response:", data)

    setComplaints(prev =>
      prev.map(c =>
        c._id === id ? { ...c, status: data.status } : c
      )
    )

  } catch (error) {

    console.log("Update error:", error)

  }

}
  useEffect(() => {
  if (token) {
    fetchComplaints()
  }
}, [token])

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h2 className="text-2xl font-bold mb-6">
            Department Complaints
          </h2>

          <table className="w-full bg-white border">

            <thead className="bg-gray-200">

              <tr>
                <th className="p-3">Student</th>
                <th className="p-3">Complaint</th>
                <th className="p-3">Category</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Status</th>
              </tr>

            </thead>

            <tbody>

              {complaints.map((c) => (

                <tr key={c._id} className="border-t">

                  <td className="p-3">{c.user?.name}</td>

                  <td className="p-3">{c.complaint_text}</td>

                  <td className="p-3">{c.category}</td>

                  <td className="p-3">{c.priority}</td>

                  <td className="p-3">

              <select
  value={c.status}
  onChange={(e) => updateStatus(c._id, e.target.value)}
  className="border p-1 rounded"
>
  <option value="Pending">Pending</option>
  <option value="In Progress">In Progress</option>
  <option value="Resolved">Resolved</option>
</select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )

}

export default AdminDashboard