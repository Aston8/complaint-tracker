import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateTodo() {

  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [due, setDue] = useState("")

  const navigate = useNavigate()

  const createTodo = async () => {

    await fetch("http://localhost:3000/api/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        status,
        due
      })
    })

    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[450px]">

        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create Todo
        </h1>

        <div className="grid grid-cols-3 gap-4 items-center mb-4">
          <label className="font-medium text-gray-600">Name</label>
          <input
            className="col-span-2 border p-2 rounded"
            placeholder="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-center mb-4">
          <label className="font-medium text-gray-600">Status</label>
          <input
            className="col-span-2 border p-2 rounded"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-center mb-6">
          <label className="font-medium text-gray-600">Due Date</label>
          <input
            type="date"
            className="col-span-2 border p-2 rounded"
            value={due}
            onChange={(e) => setDue(e.target.value)}
          />
        </div>

        <button
          onClick={createTodo}
          className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded font-semibold transition"
        >
          Create Todo
        </button>

      </div>

    </div>
  )
}

export default CreateTodo