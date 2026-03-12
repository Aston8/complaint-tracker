import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function SubmitComplaint({ refresh }) {

  const { token } = useContext(AuthContext)

  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (!text) return

    setLoading(true)

    try {

      const res = await fetch(
        "http://localhost:3000/api/complaints/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            complaint_text: text
          })
        }
      )

      await res.json()

      setText("")
      refresh()

    } catch (error) {

      console.log(error)

    }

    setLoading(false)

  }

  return (

    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"></span>
        Submit New Complaint
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label htmlFor="complaint-text" className="block text-sm font-medium text-gray-700 mb-2">
            Describe your issue
          </label>
          <textarea
            id="complaint-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Please provide a detailed description of your complaint..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-0.5 ${
              loading || !text.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
            }`}
          >

            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Complaint'
            )}

          </button>
        </div>

      </form>

    </div>

  )

}

export default SubmitComplaint