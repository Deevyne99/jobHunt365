import { useState } from 'react'
import FilterComponent from '../../Components/ReuseableComponets/FilterComponent/FilterComponent'
import SmallFilterComponent from '../../Components/ReuseableComponets/FilterComponent/smallFilterComponent/SmallFilterComponent'

import SuggestedJob from '../../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import {
  FaGlobe,
  FaSliders,
  FaSistrix,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Applications = () => {
  const [openFilter, setOpenFilter] = useState(false)
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const handleOpenFilter = () => setOpenFilter(!openFilter)
  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded)

  return (
    <div className='flex flex-col w-full relative'>
      {/* <div>
        <Navigation />
      </div> */}
      <SmallFilterComponent
        openFilter={openFilter}
        handleOpenFilter={handleOpenFilter}
      />

      <div className='flex w-full mt-16 '>
        <div className={`flex w-full  transition-margin duration-300`}>
          <div className='hidden md:flex md:w-[30%] xl:w-[20%] p-2 mt-4'>
            <FilterComponent />
          </div>
          <div className='lg:w-[60%] w-full   mt-6 flex flex-col md:px-4 px-2 max-h-screen overflow-y-scroll mb-4'>
            <div className='flex items-center gap-4 justify-center'>
              <button
                className='bg-[#60a5fa] text-lg capitalize text-white p-2 rounded-md cursor-pointer md:hidden flex'
                onClick={() => handleOpenFilter()}
              >
                <FaSliders />
              </button>
              <input
                type='text'
                className='md:w-[90%] w-full p-2 border-gray-100 focus:border-[#3b82f6] outline-none rounded-md border'
              />
              <button className='text-white text-lg capitalize bg-[#60a5fa] p-2 rounded-md cursor-pointer'>
                <FaSistrix className='font-bold text-lg' />
              </button>
            </div>
            <div className='mt-4 grid 2xl:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center md:mx-2 mx-0'>
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

          <div className='hidden lg:flex flex-col gap-4 md:w-[30%] w-[20%] mt-4 max-h-screen overflow-y-scroll p-2'>
            <div className='flex w-full p-4 rounded-md bg-white items-center gap-4'>
              <div>
                <FaGlobe className='text-[#60a5fa]' />
              </div>
              <h2 className='text-sm text-[#6b7280] font-bold'>
                Suggested Job
              </h2>
            </div>
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Applications
