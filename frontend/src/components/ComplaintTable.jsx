import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function ComplaintTable() {

  const { token } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const fetchComplaints = async () => {

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

  }

  const updateStatus = async (id, status) => {

    await fetch(
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

    fetchComplaints()

  }

  useEffect(() => {
    fetchComplaints()
  }, [])

  return (

    <div className="p-8">

      <h2 className="text-2xl font-bold mb-6">
        Department Complaints
      </h2>

      <table className="w-full border">

        <thead className="bg-gray-200">

          <tr>
            <th className="p-2">Student</th>
            <th className="p-2">Complaint</th>
            <th className="p-2">Category</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Status</th>
          </tr>

        </thead>

        <tbody>

          {complaints.map((c) => (

            <tr key={c._id} className="border-t">

              <td className="p-2">{c.user?.name}</td>

              <td className="p-2">{c.complaint_text}</td>

              <td className="p-2">{c.category}</td>

              <td className="p-2">{c.priority}</td>

              <td className="p-2">

                <select
                  value={c.status}
                  onChange={(e) =>
                    updateStatus(c._id, e.target.value)
                  }
                >

                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default ComplaintTable