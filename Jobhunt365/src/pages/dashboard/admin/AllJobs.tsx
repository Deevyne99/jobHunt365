import { FaSistrix } from 'react-icons/fa6'
// import InputComponent from '../../../Components/ReuseableComponets/InputComponent/InputComponent'
import SuggestedJob from '../../../Components/ReuseableComponets/miniJobCard/SuggestedJob'

// import React from 'react'

const AllJobs = () => {
  return (
    <div className='mx-4 md:mx-12 my-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center justify-center w-[80%] md:w-[75%]'>
            <input
              type='text'
              className=' w-full p-2 border-gray-100 focus:border-[#3b82f6] outline-none rounded-r-none  rounded-md border'
            />
            <button className='text-white  text-lg capitalize bg-[#60a5fa] p-3 rounded-r-md cursor-pointer'>
              <FaSistrix className='font-bold text-lg' />
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
