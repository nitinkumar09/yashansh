import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from './pages/auth'
import Login from "./pages/login"
import Profile from "./pages/profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
