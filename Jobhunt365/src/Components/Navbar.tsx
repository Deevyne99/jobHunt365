import { Link, Outlet } from 'react-router-dom'

// import React from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import Sidebar from './ReuseableComponets/Sidebar/Sidebar'
import { useState } from 'react'

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [register, setRegister] = useState(false)

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  const handleRegister = () => {
    setRegister(!register)
  }
  return (
    <main>
      <header className='flex flex-col bg-white   '>
        <div className='flex flex-col mx-4 md:mx-16 py-2'>
          <nav className='flex justify-between items-center py-4 px-8 fixed left-0 top-0 shadow-sm  w-full z-20 bg-white'>
            <h1>JobHunt365</h1>
            <ul className='md:flex items-center gap-4 hidden'>
              <Link className='capitalize' to={'/'}>
                Home
              </Link>
              <Link className='capitalize' to={'/login'}>
                login
              </Link>
              <button onClick={() => handleRegister()} className='capitalize'>
                register
              </button>
            </ul>
            <button
              onClick={() => handleOpenSidebar()}
              className='flex md:hidden'
            >
              <RiMenu3Line className='text-xl text-[#94a3b8] font-bold' />
            </button>
          </nav>
        </div>
        {register && (
          <div className='flex w-[250px] absolute top-16 p-6 z-20 right-4 rounded-md bg-white shadow-xl flex-col gap-4 '>
            <Link className='text-[#94a3b8] ' to={'/register-agent'}>
              Register as a Recriuter
            </Link>
            <Link className='text-[#94a3b8]' to={'/register'}>
              Register as a User
            </Link>
          </div>
        )}
      </header>
      <Outlet />
      <div>
        <Sidebar
          openSidebar={openSidebar}
          handleOpenSidebar={handleOpenSidebar}
        />
      </div>
    </main>
  )
}

export default Navbar
