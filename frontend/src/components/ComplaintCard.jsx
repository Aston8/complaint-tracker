function ComplaintCard({ complaint }) {

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

    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">

      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed font-medium">
          {complaint.complaint_text}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">{complaint.category || 'General'}</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Department</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">{complaint.department || 'General'}</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Priority</p>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getPriorityColor(complaint.priority)}`}>
            {complaint.priority || 'Medium'}
          </span>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Status</p>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(complaint.status)}`}>
            {complaint.status || 'Pending'}
          </span>
        </div>

      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">
          Submitted on {new Date(complaint.createdAt || Date.now()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

    </div>

  )

}

export default ComplaintCard