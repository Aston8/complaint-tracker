import Navbar from "../components/Navbar.jsx"
import Sidebar from "../components/Sidebar.jsx"

function AdminDashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-2xl font-bold">
            Admin Dashboard
          </h1>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard