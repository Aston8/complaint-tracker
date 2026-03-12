import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Signup from "../pages/Signup"
import StudentDashboard from "../pages/StudentDashboard"
import AdminDashboard from "../pages/AdminDashboard"

import ProtectedRoute from "../components/ProtectedRoute"

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes