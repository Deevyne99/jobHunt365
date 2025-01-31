import { useState } from 'react'
import SmallFilterComponent from '../../Components/ReuseableComponets/FilterComponent/smallFilterComponent/SmallFilterComponent'
import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'
import { FaSliders, FaSistrix } from 'react-icons/fa6'
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

      <div className='flex w-full overflow-y-scroll'>
        <div className={`flex w-full  transition-margin duration-300`}>
          <div className='flex  w-full mt-16 '>
            <div className=' w-full   mt-6 flex flex-col md:px-4 px-4 max-h-screen  mb-4'>
              <div className='flex items-center gap-4 justify-center w-full'>
                <button
                  className='bg-[#60a5fa] text-lg capitalize text-white p-2 rounded-md cursor-pointer md:hidden flex'
                  onClick={() => handleOpenFilter()}
                >
                  <FaSliders />
                </button>
                <input
                  type='text'
                  className=' w-[93%] p-2 border-gray-100 focus:border-[#3b82f6] outline-none rounded-md border'
                />
                <button className='text-white text-lg capitalize bg-[#60a5fa] p-2 rounded-md cursor-pointer'>
                  <FaSistrix className='font-bold text-lg' />
                </button>
              </div>
              <div className='w-full mt-4 grid 2xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center md:mx-2 mx-0'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Applications
