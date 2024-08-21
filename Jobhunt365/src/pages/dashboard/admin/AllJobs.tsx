import { FaSistrix } from 'react-icons/fa6'
// import InputComponent from '../../../Components/ReuseableComponets/InputComponent/InputComponent'
import SuggestedJob from '../../../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
// import ShortDropdown from '../../../Components/ReuseableComponets/shortDropDown/ShortDropDown'
// import { useState } from 'react'
// import React from 'react'

const AllJobs = () => {
  // const [openFilter, setOpenFilter] = useState(false)

  return (
    <div className='mx-4 md:mx-12 my-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center justify-center w-[80%] md:w-[70%]'>
            <input
              type='text'
              className=' w-full p-2 border-gray-100 focus:border-[#3b82f6] outline-none rounded-r-none  rounded-md border'
            />
            <button className='text-white  text-lg capitalize bg-[#60a5fa] p-3 rounded-r-md cursor-pointer'>
              <FaSistrix className='font-bold text-lg' />
            </button>
          </div>
          <div className='flex gap-4 capitalize'>
            <div>
              <button className='capitalize w-[100px] flex gap-1 items-center  bg-white p-2 text-[#6b7280] text-sm'>
                filter by
                <IoMdArrowDropdown className='text-2xl' />
              </button>
            </div>
            <div>
              <button className='capitalize flex gap-1 items-center  bg-white p-2 text-[#6b7280] text-sm'>
                sort by
                <IoMdArrowDropdown className='text-2xl' />
              </button>
            </div>
            <button className='capitalize bg-[#60a5fa] text-white p-2'>
              add job
            </button>
          </div>
        </div>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-6'>
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
        </div>
      </div>
    </div>
  )
}

export default AllJobs
