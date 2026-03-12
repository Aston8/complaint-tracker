import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white h-screen p-6">

      <h2 className="text-xl font-bold mb-8">
        Dashboard
      </h2>

      <ul className="space-y-4">

        <li>
          <Link to="/student" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/submit" className="hover:text-blue-400">
            Submit Complaint
          </Link>
        </li>

        <li>
          <Link to="/analytics" className="hover:text-blue-400">
            Analytics
          </Link>
        </li>

      </ul>

    </div>
  )
}

export default Sidebar