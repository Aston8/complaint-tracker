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

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      <div className="max-w-md w-full mx-4">

        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>
            <p className="text-gray-600 mt-2">Join the complaint tracker system</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Choose a strong password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Account Type
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                onChange={handleChange}
                value={form.role}
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>

            {form.role === "admin" && (
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  onChange={handleChange}
                  value={form.department}
                  required
                >
                 <option value="">Select Department</option>
<option value="maintenance">Maintenance Department</option>
<option value="hostel">Hostel Warden</option>
<option value="academic">Academic Office</option>
<option value="canteen">Canteen Manager</option>
<option value="student welfare">Student Welfare Cell</option>
<option value="administration">Administration</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Create Account
            </button>

          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?
              <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium ml-2 hover:underline transition-colors">
                Sign In
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>

  )

}

export default Signup