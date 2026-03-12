import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import StudentDashboard from "../pages/StudentDashboard"
import AdminDashboard from "../pages/AdminDashboard"
import Analytics from "../pages/Analytics"

function AppRoutes(){

return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/student" element={<StudentDashboard/>}/>
<Route path="/admin" element={<AdminDashboard/>}/>
<Route path="/analytics" element={<Analytics/>}/>

</Routes>

</BrowserRouter>
)

}

export default AppRoutes