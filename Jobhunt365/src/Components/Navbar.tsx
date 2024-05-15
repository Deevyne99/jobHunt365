import { Link, Outlet } from 'react-router-dom'

// import React from 'react'
Outlet

const Navbar = () => {
  return (
    <header className='flex flex-col mx-4 md:mx-16 bg-white'>
      <nav className='flex justify-between '>
        <h1>logo</h1>
        <ul className='flex items-center gap-4'>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>login</Link>
          <Link to={'/register'}>register</Link>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}

export default Navbar
