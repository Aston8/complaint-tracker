import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Sidebar() {

  const { user } = useContext(AuthContext)

  return (

    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-4">

        {/* ADMIN MENU */}
        {user?.role === "admin" && (
          <>
            <Link
              to="/admin"
              className="hover:text-blue-400"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/complaints"
              className="hover:text-blue-400"
            >
              Manage Complaints
            </Link>

            <Link
              to="/admin/analytics"
              className="hover:text-blue-400"
            >
              Analytics
            </Link>
          </>
        )}

        {/* STUDENT MENU */}
        {user?.role === "student" && (
          <>
            <Link
              to="/student"
              className="hover:text-blue-400"
            >
              Dashboard
            </Link>

            <Link
              to="/student/submit"
              className="hover:text-blue-400"
            >
              Submit Complaint
            </Link>
          </>
        )}

      </nav>

    </div>

  )
}

export default Sidebar