import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import Error from './pages/Error'
import Jobs from './pages/dashboard/Jobs'
import Stats from './pages/dashboard/Stats'
// import Navigation from './Components/ReuseableComponets/Navigation/Navigation'
// import { useEffect } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/jobs' element={<Jobs />} />
        <Route path='/dashboard/stat' element={<Stats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
