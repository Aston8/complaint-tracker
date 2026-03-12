import Navbar from "../components/Navbar.jsx"
import Sidebar from "../components/Sidebar.jsx"

function SubmitComplaint() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-xl font-bold mb-4">
            Submit Complaint
          </h1>

          <textarea
            placeholder="Describe your complaint"
            className="border p-2 w-full h-32"
          />

        </div>

      </div>

    </div>
  )
}

export default SubmitComplaint