// import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
const Navigation = () => {
  const [openNav, setOpenNav] = useState(true)
  return (
    <header className='flex fixed z-10 h-[60px] flex-col  bg-white w-full shadow-sm'>
      <div className='flex flex-col'>
        <div className=' flex items-center py-2 justify-between mx-4 md:mx-8'>
          <div className='flex'>
            <h1 className='text-xl hidden md:flex'>Jobhunt365</h1>
            <button className='flex md:hidden' onClick={() => setOpenNav(true)}>
              open
            </button>
          </div>
          <div className='hidden md:flex gap-6  items-center'>
            <Link
              className='capitalize hover:text-light-blue'
              to={'/dashboard/jobs'}
            >
              jobs
            </Link>
            <Link
              className='capitalize hover:text-light-blue'
              to={'/applications'}
            >
              Applications
            </Link>
            <Link
              className='capitalize hover:text-light-blue'
              to={'/dashboard/stat'}
            >
              Stat
            </Link>
            <Link className='capitalize hover:text-light-blue' to={'/profile'}>
              Profile
            </Link>
          </div>
          <div>
            <Avatar firstName='Ude' lastName='banks' />
          </div>
        </div>
      </div>
      <div
        className={`${
          openNav
            ? 'flex md:hidden fixed h-full z-0 w-full bg-[#000] bg-opacity-5 backdrop-blur-sm'
            : 'w-0  z-0'
        }`}
      >
        <div
          className={` transform duration-300 ${
            openNav ? 'translate-y-0' : 'translate-y-[-500px]'
          } fixed flex-col flex md:hidden top-20 bg-white p-4 left-0 right-0 mx-auto sm:w-[450px] w-[90%] h-[300px] `}
        >
          <button className='flex ml-auto' onClick={() => setOpenNav(!openNav)}>
            <FiX />
          </button>
          <div className='flex flex-col gap-6  mt-8'>
            <Link
              className='capitalize hover:text-light-blue'
              to={'/dashboard/jobs'}
            >
              jobs
            </Link>
            <Link
              className='capitalize hover:text-light-blue'
              to={'/applications'}
            >
              Applications
            </Link>
            <Link
              className='capitalize hover:text-light-blue'
              to={'/dashboard/stat'}
            >
              Stat
            </Link>
            <Link className='capitalize hover:text-light-blue' to={'/profile'}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
