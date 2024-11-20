import { Link, Outlet } from 'react-router-dom'

// import React from 'react'

const Navbar = () => {
  return (
    <main>
      <header className='flex flex-col bg-white   '>
        <div className='flex flex-col mx-4 md:mx-16 py-2'>
          <nav className='flex justify-between items-center py-4 px-8 fixed left-0 top-0 shadow-sm  w-full z-20 bg-white'>
            <h1>JobHunt365</h1>
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
