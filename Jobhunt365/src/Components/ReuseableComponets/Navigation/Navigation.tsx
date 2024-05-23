// import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FaAlignRight } from 'react-icons/fa'
import { data } from '../../../data'

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <header className='flex fixed z-10 h-[60px] flex-col  bg-white w-full shadow-sm'>
      <div className='flex flex-col'>
        <div className=' flex items-center py-2 justify-between mx-4 md:mx-8'>
          <div className='flex'>
            <h1 className='text-xl hidden md:flex'>Jobhunt365</h1>
            <button
              className='flex md:hidden text-[#6b7280]'
              onClick={() => setOpenNav(true)}
            >
              <FaAlignRight />
            </button>
          </div>
          <div className='hidden md:flex gap-6  items-center'>
            {data.map((item) => {
              return (
                <Link
                  className='capitalize hover:text-light-blue flex gap-2 items-center text-[#6b7280]'
                  to={item.url}
                  key={item.id}
                >
                  <item.icon /> {item.name}
                </Link>
              )
            })}
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
          } fixed flex-col flex md:hidden top-20 bg-white p-4 left-0 right-0 mx-auto sm:w-[450px] w-[90%] h-[300px] shadow-lg`}
        >
          <button className='flex ml-auto' onClick={() => setOpenNav(!openNav)}>
            <FiX />
          </button>
          <div className='flex flex-col gap-6  mt-8'>
            {data.map((item) => {
              return (
                <Link
                  className='capitalize text-[#6b7280] hover:text-light-blue flex gap-2 items-center'
                  to={item.url}
                  key={item.id}
                  onClick={() => setOpenNav(false)}
                >
                  <item.icon /> {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
