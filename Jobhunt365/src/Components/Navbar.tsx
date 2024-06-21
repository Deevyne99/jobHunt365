import { Link, Outlet } from 'react-router-dom'

// import React from 'react'

const Navbar = () => {
  return (
    <main>
      <header className='flex flex-col  bg-white py-2'>
        <div className='flex flex-col mx-4 md:mx-16 '>
          <nav className='flex justify-between items-center py-2'>
            <h1>logo</h1>
            <ul className='flex items-center gap-4'>
              <Link to={'/'}>Home</Link>
              <Link to={'/login'}>login</Link>
              <Link to={'/register'}>register</Link>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </main>
  )
}

export default Navbar



