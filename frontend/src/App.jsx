// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CreateTodo from './component/CreateTodo'
// import TodoList from './component/TodoList'
// import UpdateTodo from './component/UpdateTodo'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<TodoList />} />
//         <Route path='/create' element={<CreateTodo />} />
//         <Route path='/edit/:id' element={<UpdateTodo />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import AppRoutes from "./routes/AppRoutes"

function App() {

  return <AppRoutes />

}

export default App