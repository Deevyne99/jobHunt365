// import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FaAlignRight, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { data } from '../../../data'

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openDropDown, setOpenDropDown] = useState(false)
  return (
    <header className='flex fixed z-30 h-[60px] left-0 top-0 flex-col  bg-white w-full shadow-sm'>
      <div className='flex flex-col'>
        <div className=' flex items-center py-2 justify-between mx-4 md:mx-8'>
          <div className='flex'>
            <Link to={'/'} className='text-xl hidden md:flex'>
              Jobhunt365
            </Link>
            <button
              className='flex md:hidden text-[#6b7280]'
              onClick={() => setOpenNav(true)}
            >
              <FaAlignRight />
            </button>
          </div>

          <div
            className='flex items-center gap-2 '
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <Avatar firstName='Ude' lastName='banks' />
            {openDropDown ? (
              <FaChevronUp className='text-[#6b7280] text-sm' />
            ) : (
              <FaChevronDown className='text-[#6b7280] text-sm' />
            )}
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
                  className='capitalize text-[#6b7280] hover:text-[#60a5fa] flex gap-2 items-center'
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

      <div
        className={`bg-white  transition-all duration-300 rounded-md flex flex-col gap-4 items-start shadow-md h-[100px] w-[180px] absolute top-20 right-4 p-4 ${
          openDropDown ? 'top-20 ' : 'top-[-300px]'
        }`}
      >
        <button className='flex gap-2 items-center capitalize'>
          <FaUser className='text-[#6b7280]' />
          profile
        </button>
        <button className='flex gap-2 items-center capitalize'>
          <FaSignOutAlt className='text-[#6b7280]' /> logout
        </button>
      </div>
    </header>
  )
}

export default Navigation
