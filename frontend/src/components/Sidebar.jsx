import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen shadow-2xl">

      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">
            Dashboard
          </h2>
        </div>
      </div>

      <nav className="p-6">
        <ul className="space-y-2">

          <li>
            <Link 
              to="/student" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
              <span className="group-hover:text-blue-400 transition-colors">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link 
              to="/submit" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="group-hover:text-green-400 transition-colors">Submit Complaint</span>
            </Link>
          </li>

          <li>
            <Link 
              to="/analytics" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v13.6" />
              </svg>
              <span className="group-hover:text-purple-400 transition-colors">Analytics</span>
            </Link>
          </li>

        </ul>
      </nav>

    </div>
  )
}

export default Sidebar