function ComplaintTable({ complaints }) {

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'resolved':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">

            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-800 uppercase tracking-wide text-sm">
                Complaint ID
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-800 uppercase tracking-wide text-sm">
                Description
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-800 uppercase tracking-wide text-sm">
                Category
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-800 uppercase tracking-wide text-sm">
                Priority
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-800 uppercase tracking-wide text-sm">
                Status
              </th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-200">

            {complaints && complaints.length > 0 ? complaints.map((c, index) => (

              <tr key={c._id || c.id || index} className="hover:bg-gray-50 transition-colors duration-150">

                <td className="py-4 px-6">
                  <span className="text-sm font-medium text-gray-900">
                    #{c._id?.slice(-6) || c.id?.slice(-6) || `00${index + 1}`.slice(-3)}
                  </span>
                </td>

                <td className="py-4 px-6">
                  <div className="max-w-xs">
                    <p className="text-sm text-gray-900 line-clamp-2">
                      {c.complaint_text || c.description || 'No description'}
                    </p>
                  </div>
                </td>

                <td className="py-4 px-6">
                  <span className="text-sm text-gray-700">
                    {c.category || 'General'}
                  </span>
                </td>

                <td className="py-4 px-6">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(c.priority)}`}>
                    {c.priority || 'Medium'}
                  </span>
                </td>

                <td className="py-4 px-6">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(c.status)}`}>
                    {c.status || 'Pending'}
                  </span>
                </td>

              </tr>

            )) : (
              <tr>
                <td colSpan="5" className="py-12 text-center">
                  <div className="text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-lg font-medium">No complaints found</p>
                    <p className="text-sm mt-2">There are no complaints to display at the moment.</p>
                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  )
}

export default ComplaintTable