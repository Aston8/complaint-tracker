import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function SubmitComplaint({ refresh }) {

  const { token } = useContext(AuthContext)

  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      const res = await fetch("http://localhost:3000/api/complaints/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          complaint_text: text
        })
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message)
        setLoading(false)
        return
      }

      setText("")
      refresh()

    } catch (error) {

      alert("Error submitting complaint")

    }

    setLoading(false)

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow"
    >

      <h2 className="text-lg font-semibold mb-3">
        Submit Complaint
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe your issue..."
        className="border w-full p-2 rounded mb-3"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >

        {loading ? "Submitting..." : "Submit Complaint"}

      </button>

    </form>

  )

}

export default SubmitComplaint