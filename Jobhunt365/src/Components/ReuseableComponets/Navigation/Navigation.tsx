// import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useState, useRef } from 'react'
import { FiX } from 'react-icons/fi'
import { FaAlignRight, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { FaChevronDown, FaSquarePlus, FaChevronUp } from 'react-icons/fa6'
import { data } from '../../../data'
import InputComponent from '../InputComponent/InputComponent'
import Dropdown from '../dropDownComponente/DropDown'
import Button from '../ButtonComponent/Button'

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openAddJob, setOpenAddJob] = useState(false)
  const [openDropDown, setOpenDropDown] = useState(false)

  const [image, setImage] = useState<string | ArrayBuffer | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSelect = (option: string) => {
    console.log('Selected option:', option)
  }
  return (
    <header className='flex fixed z-20 h-[60px] flex-col  bg-white w-full shadow-sm'>
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
          <div className='hidden md:flex gap-6  items-center'>
            {data.map((item) => {
              return (
                <Link
                  className='capitalize hover:text-[#60a5fa] flex gap-2 items-center text-[#6b7280]'
                  to={item.url}
                  key={item.id}
                >
                  <item.icon /> {item.name}
                </Link>
              )
            })}
            <button
              onClick={() => setOpenAddJob(!openAddJob)}
              className='capitalize  hover:text-[#60a5fa] flex gap-2 items-center text-[#6b7280]'
            >
              <FaSquarePlus />
              Add Job
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
        className={`${
          openAddJob
            ? 'flex  fixed h-full z-80 w-full bg-[#000] bg-opacity-5 backdrop-blur-sm'
            : 'w-0  z-0'
        }`}
      >
        <div
          className={` transition-transform ease-out duration-300 fixed top-0 right-0  p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[90%] overflow-y-scroll ${
            openAddJob ? '    translate-x-0 ' : 'translate-x-full '
          }`}
        >
          <button onClick={() => setOpenAddJob(false)}>
            <FiX className='text-2xl' />
          </button>

          <h1 className='text-xl capitalize'>Add Applied Jobs</h1>
          <div>
            <InputComponent label='company' />
          </div>
          <div>
            <InputComponent label='Position' />
          </div>

          <div className='mt-1'>
            <Dropdown
              onSelect={handleSelect}
              options={['Internship', 'Part-time', 'Full-time', 'Contract']}
              label='Job Type'
            />
          </div>
          <div className='mt-1'>
            <Dropdown
              onSelect={handleSelect}
              options={['Remote', 'Onsite', 'Hybrid']}
              label='Job Location'
            />
          </div>
          <div className='mt-1'>
            <Dropdown
              onSelect={handleSelect}
              options={['Pending', 'Interview', 'Declined', 'Accepted']}
              label='Status'
            />
          </div>
          <div className='flex gap-4 w-full items-center'>
            <div className='w-1/2'>
              <InputComponent label='Min. Salary' />
            </div>
            <div className='w-1/2'>
              <InputComponent label='Max. Salary' />
            </div>
          </div>
          <div className='flex mt-4 flex-col items-center justify-center w-full '>
            <div
              className='w-full p-2 border-2 border-dashed border-gray-100 rounded-lg cursor-pointer flex items-center justify-center bg-white'
              onClick={handleUploadClick}
            >
              {image ? (
                <img
                  src={image as string}
                  alt='Uploaded'
                  className='object-cover w-full h-full rounded-lg'
                />
              ) : (
                <span className='text-gray-500'>Click to upload an image</span>
              )}
            </div>
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              className='hidden'
              onChange={handleImageChange}
            />
            {/* <button
              onClick={handleUploadClick}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Upload Image
            </button> */}
          </div>
          <div className='mt-6'>
            <Button label='Add Job' />
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
