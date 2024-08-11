import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import Error from './pages/Error'
import Jobs from './pages/dashboard/Jobs'
import Stats from './pages/dashboard/Stats'
import Applications from './pages/dashboard/Applications'
import Profile from './pages/dashboard/Profile'
import ShareLayout from './pages/dashboard/ShareLayout'
import ProtectedRoute from './pages/dashboard/admin/ProtectedRoute'
import Analytics from './pages/dashboard/admin/Analytics'
import AllJobs from './pages/dashboard/admin/AllJobs'
import AppliedJobs from './pages/dashboard/admin/AppliedJobs'
import Users from './pages/dashboard/admin/Users'

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
        <Route path='/dashboard/' element={<ShareLayout />}>
          <Route index element={<Jobs />} />
          <Route path='applications' element={<Applications />} />
          <Route path='stat' element={<Stats />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/admin/dashboard/' element={<ProtectedRoute />}>
          <Route index element={<Analytics />} />
          <Route path='jobs' element={<AllJobs />} />
          <Route path='users' element={<Users />} />
          <Route path='applied-jobs' element={<AppliedJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
