import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import ComplaintCard from "../components/ComplaintCard"
import SubmitComplaint from "./SubmitComplaint"

function StudentDashboard() {

  const { user, token, logout } = useContext(AuthContext)

  const [complaints, setComplaints] = useState([])

  const fetchComplaints = async () => {

    try {

      const res = await fetch(
        "http://localhost:3000/api/complaints/my",
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

  useEffect(() => {
    fetchComplaints()
  }, [])

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* HEADER */}
      
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Student Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
            </div>

            <div className="flex gap-4 items-center">

              <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                <span className="text-blue-700 font-medium">
                  {user?.name}
                </span>
              </div>

              <button
                onClick={logout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Logout
              </button>

            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

      {/* SUBMIT COMPLAINT */}

      <SubmitComplaint refresh={fetchComplaints} />

        {/* COMPLAINT LIST */}

        <div className="mt-8">

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></span>
              My Complaints
            </h2>

            <div className="grid gap-6">

              {complaints.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">No complaints yet</p>
                  <p className="text-gray-400 text-sm mt-2">Submit your first complaint using the form above</p>
                </div>
              ) : (
                complaints.map((complaint) => (
                  <ComplaintCard
                    key={complaint._id}
                    complaint={complaint}
                  />
                ))
              )}

            </div>
          </div>

        </div>

      </div>

    </div>

  )

}

export default StudentDashboard