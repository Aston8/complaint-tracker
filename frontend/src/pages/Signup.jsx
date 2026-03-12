import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Signup() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    department: ""
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

      const bodyData = {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role
      }

      // only send department if admin
      if (form.role === "admin") {
        bodyData.department = form.department
      }

      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message)
        return
      }

      alert("Signup successful")
      navigate("/")

    } catch (error) {

      console.log(error)
      alert("Signup failed")

    }

  }

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-lg w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          className="border p-2 w-full mb-4 rounded"
          onChange={handleChange}
        />

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

        {/* ROLE SELECT */}

        <select
          name="role"
          className="border p-2 w-full mb-4 rounded"
          onChange={handleChange}
        >

          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>

        </select>

        {/* DEPARTMENT SELECT ONLY FOR ADMIN */}

        {form.role === "admin" && (

          <select
            name="department"
            className="border p-2 w-full mb-4 rounded"
            onChange={handleChange}
          >

            <option value="">Select Department</option>

            <option value="Infrastructure">Infrastructure</option>
            <option value="IT">IT</option>
            <option value="Hostel">Hostel</option>
            <option value="Academic">Academic</option>
            <option value="Canteen">Canteen</option>
            <option value="Security">Security</option>

          </select>

        )}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <Link to="/" className="text-blue-600 ml-2">
            Login
          </Link>
        </p>

      </form>

    </div>

  )

}

export default Signup