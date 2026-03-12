function ComplaintCard({ title, status }) {

  return (
    <div className="bg-white p-4 shadow rounded">

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        Status: {status}
      </p>

    </div>
  )
}

export default ComplaintCard