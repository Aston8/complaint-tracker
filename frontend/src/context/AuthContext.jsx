import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  // SAFE USER LOAD
  const getStoredUser = () => {
    try {

      const storedUser = localStorage.getItem("user")

      if (!storedUser || storedUser === "undefined") {
        return null
      }

      return JSON.parse(storedUser)

    } catch (error) {
      return null
    }
  }

  const getStoredToken = () => {
    const token = localStorage.getItem("token")
    return token ? token : null
  }

  const [user, setUser] = useState(getStoredUser())
  const [token, setToken] = useState(getStoredToken())

  const login = (userData, tokenData) => {

    setUser(userData)
    setToken(tokenData)

    localStorage.setItem("user", JSON.stringify(userData))
    localStorage.setItem("token", tokenData)

  }

  const logout = () => {

    setUser(null)
    setToken(null)

    localStorage.removeItem("user")
    localStorage.removeItem("token")

  }

  return (

    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>

  )

}