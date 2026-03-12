import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function ProtectedRoute({ children, role }) {

  const { user, token } = useContext(AuthContext)

  if (!token) {
    return <Navigate to="/" />
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" />
  }

  return children

}

export default ProtectedRoute