// import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'
import { MdDashboard } from 'react-icons/md'
import { FaFileSignature } from 'react-icons/fa'

const Features = ({
  id,
  description,
  name,
}: {
  id: number
  description: string
  name: string
}) => {
  return (
    <div className='flex flex-col  shadow-2xl  p-4 w-[300px] h-[250px] justify-center items-center  '>
      {id === 1 ? (
        <div className=' flex flex-col bg-[#f0f9ff] p-2 w-[40px] h-[40px] rounded-[50%] justify-center items-center'>
          <FaFileSignature className=' text-[#0284c7] text-xl' />
        </div>
      ) : id === 2 ? (
        <div className=' flex flex-col bg-[#fff7ed]  p-2 w-[40px] h-[40px] rounded-[50%] justify-center items-center'>
          <SlCalender className=' text-[#ea580c] text-xl' />
        </div>
      ) : id === 3 ? (
        <div className=' flex flex-col bg-[#f0fdf4]  p-2 w-[40px] h-[40px] rounded-[50%] justify-center items-center'>
          <MdDashboard className=' text-[#16a34a] text-xl' />
        </div>
      ) : id === 4 ? (
        <div className=' flex flex-col  bg-[#fef2f2]  p-2 w-[40px] h-[40px] rounded-[50%]  justify-center items-center'>
          <IoSearchOutline className=' text-[#dc2626] text-xl' />
        </div>
      ) : null}

      <h3 className='text-md font-bold  mt-4'>{name}</h3>
      <p className='tracking-wide leading-normal mt-2 text-center'>
        {description}
      </p>
    </div>
  )
}

export default Features
