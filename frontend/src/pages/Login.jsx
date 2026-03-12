import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function Login() {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message)
        return
      }

      login(data)

      if (data.user.role === "admin") {
        navigate("/admin")
      } else if (data.user.role === "superadmin") {
        navigate("/analytics")
      } else {
        navigate("/student")
      }

    } catch (error) {

      alert("Login error")

    }

  }

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          onChange={handleChange}
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don't have account?
          <Link to="/signup" className="text-blue-600 ml-2">
            Signup
          </Link>
        </p>

      </form>

    </div>

  )

}

export default Login