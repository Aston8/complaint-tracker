function ComplaintCard({ complaint }) {

  return (

    <div className="border p-4 rounded shadow">

      <p className="font-semibold">
        {complaint.complaint_text}
      </p>

      <p className="text-sm mt-2">
        Category: {complaint.category}
      </p>

      <p className="text-sm">
        Department: {complaint.department}
      </p>

      <p className="text-sm">
        Priority: {complaint.priority}
      </p>

      <p className="text-sm">
        Status: {complaint.status}
      </p>

    </div>

  )

}

export default ComplaintCard