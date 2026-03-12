import Navbar from "../components/Navbar.jsx"
import Sidebar from "../components/Sidebar.jsx"

function StudentDashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-2xl font-bold mb-4">
            Student Dashboard
          </h1>

          <p>
            Welcome to the complaint tracker system.
          </p>

        </div>

      </div>

    </div>
  )
}

export default StudentDashboard