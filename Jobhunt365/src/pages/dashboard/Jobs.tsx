import FilterComponent from '../../Components/ReuseableComponets/FilterComponent/FilterComponent'
import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'
import SuggestedJob from '../../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import { FaGlobe } from 'react-icons/fa6'
// import React from 'react'

const Jobs = () => {
  return (
    <div className='flex flex-col w-full  '>
      <div>
        <Navigation />
      </div>
      <div className='flex w-full  px-8 mt-16 '>
        <div className='flex  w-[20%] p-2 mt-4 '>
          <FilterComponent />
        </div>
        <div className=' w-[60%] mt-4  flex flex-col mx-4 px-4 max-h-screen overflow-y-scroll mb-4'>
          <div className='flex items-center gap-4 '>
            <input
              type='text'
              className='w-[85%] p-2 border-gray-100 focus:border-[#3b82f6] outline-none  rounded-md border'
            />
            <button className='w-[15%] text-white capitalize bg-light-blue p-2 rounded-md cursor-pointer'>
              search
            </button>
          </div>
          <div className='mt-4  grid 2xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-center items-center  '>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>

        <div className=' flex  flex-col gap-4 w-[20%]  mt-4 max-h-screen overflow-y-scroll p-2'>
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

export default Jobs
