function ComplaintTable({ complaints }) {

  return (
    <table className="w-full border">

      <thead className="bg-gray-200">

        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Category</th>
          <th className="p-2">Priority</th>
          <th className="p-2">Status</th>
        </tr>

      </thead>

      <tbody>

        {complaints.map((c) => (

          <tr key={c.id} className="border">

            <td className="p-2">{c.id}</td>
            <td className="p-2">{c.category}</td>
            <td className="p-2">{c.priority}</td>
            <td className="p-2">{c.status}</td>

          </tr>

        ))}

      </tbody>

    </table>
  )
}

export default ComplaintTable