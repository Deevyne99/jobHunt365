import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import Error from './pages/Error'
import Jobs from './pages/dashboard/Jobs'
import Stats from './pages/dashboard/Stats'

function App() {
  return (
    <div className='bg-[#F5F7FB]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Error />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/stat' element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
