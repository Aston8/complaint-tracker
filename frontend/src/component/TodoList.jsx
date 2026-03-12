import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function TodoList() {

  const [todos, setTodos] = useState([])

  const fetchtodos = async () => {
    const res = await fetch("http://localhost:3000/api/")
    const data = await res.json()
    setTodos(data.todo || [])
  }

  useEffect(() => {
    fetchtodos()
  }, [])

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE"
    })

    fetchtodos()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center">

      <div className="bg-white shadow-2xl rounded-xl p-8 w-[520px]">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Todo List
        </h1>

        <Link
          to="/create"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg mb-6 font-semibold transition"
        >
          Create Todo
        </Link>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos found</p>
        ) : (

          <div className="space-y-4">

            {todos.map((todo) => (

              <div
                key={todo._id}
                className="border p-4 rounded-lg bg-gray-50 flex justify-between items-center shadow-sm hover:shadow-md transition"
              >

                <div>
                  <p className="font-semibold text-lg text-gray-700">
                    {todo.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    Status: {todo.status}
                  </p>

                  <p className="text-sm text-gray-500">
                    Due: {todo.due}
                  </p>
                </div>

                <div className="flex gap-2">

                  {/* EDIT BUTTON */}
                  <Link
                    to={`/edit/${todo._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Edit
                  </Link>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  )
}

export default TodoList