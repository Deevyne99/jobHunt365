import { useState } from 'react'
import FilterComponent from '../../Components/ReuseableComponets/FilterComponent/FilterComponent'
import SmallFilterComponent from '../../Components/ReuseableComponets/FilterComponent/smallFilterComponent/SmallFilterComponent'
import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'

import SuggestedJob from '../../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import { FaGlobe, FaSliders, FaSistrix } from 'react-icons/fa6'

// import React from 'react'

const Applications = () => {
  const [openFilter, setOpenFilter] = useState(false)
  const handleOpenFilter = () => setOpenFilter(!openFilter)
  return (
    <div className='flex flex-col w-full  relative '>
      {/* <div>
        <Navigation />
      </div> */}
      <SmallFilterComponent
        openFilter={openFilter}
        handleOpenFilter={handleOpenFilter}
      />

      <div className='flex w-full px-2 xl:px-8  mt-16'>
        <div className='hidden md:flex md:w-[30%]  xl:w-[20%] p-2 mt-4 '>
          <FilterComponent />
        </div>
        <div className=' xl:w-[60%]  w-full md:w-[80%] mt-6  flex flex-col  md:px-4 px-2 max-h-screen overflow-y-scroll mb-4'>
          <div className='flex items-center gap-4 justify-center'>
            <button
              className='text-[#60a5fa]  text-lg capitalize bg-white p-2 rounded-md cursor-pointer md:hidden flex'
              onClick={() => handleOpenFilter()}
            >
              <FaSliders />
            </button>
            <input
              type='text'
              className='md:w-[90%] w-full p-2 border-gray-100 focus:border-[#3b82f6] outline-none  rounded-md border'
            />
            <button className='text-white  text-lg capitalize bg-[#60a5fa] p-2 rounded-md cursor-pointer'>
              <FaSistrix className='font-bold text-lg' />
            </button>
          </div>
          <div className='mt-4  grid 2xl:grid-cols-3 sm:grid-cols-2  grid-cols-1  gap-4 justify-center items-center  md:mx-2 mx-0'>
            <JobCard JobStatus={'Interview'} />
            <JobCard JobStatus={'Declined'} />
            <JobCard JobStatus={'Accepted'} />
            <JobCard JobStatus={'Interview'} />
            <JobCard JobStatus={'Declined'} />
            <JobCard JobStatus={'Interview'} />
            <JobCard JobStatus={'Accepted'} />
            <JobCard JobStatus={'Declined'} />
          </div>
        </div>

        <div className='hidden xl:flex  flex-col gap-4 w-[20%]  mt-4 max-h-screen overflow-y-scroll p-2 '>
          <div
            className='flex w-full p-4 rounded-md bg-white items-center gap-4
          '
          >
            <div>
              <FaGlobe className='text-[#60a5fa]' />
            </div>
            <h2 className='text-sm text-[#6b7280] font-bold'>Suggested Job</h2>
          </div>
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
        </div>
      </div>
    </div>
  )
}

export default Applications
