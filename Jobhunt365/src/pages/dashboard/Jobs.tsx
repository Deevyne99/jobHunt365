import { useState } from 'react'
// import FilterComponent from '../../Components/ReuseableComponets/FilterComponent/FilterComponent'
import SmallFilterComponent from '../../Components/ReuseableComponets/FilterComponent/smallFilterComponent/SmallFilterComponent'

import SuggestedJob from '../../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import { FaSliders, FaSistrix } from 'react-icons/fa6'
import DashboardSideBar from '../../Components/ReuseableComponets/DashboardSideBar/DashboardSideBar'
// import Modal from '../../Components/ReuseableComponets/Modal/Modal'
DashboardSideBar

const Jobs = () => {
  const [openFilter, setOpenFilter] = useState(false)

  // const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const handleOpenFilter = () => setOpenFilter(!openFilter)
  // const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded)

  return (
    <div className='flex  flex-col w-full relative '>
      <SmallFilterComponent
        openFilter={openFilter}
        handleOpenFilter={handleOpenFilter}
      />

      <div className='flex w-full overflow-y-scroll'>
        <div className={`flex w-full  transition-margin duration-300`}>
          <div className='flex  w-full mt-16 px-4 '>
            <div className=' w-full   mt-6 flex flex-col max-h-screen  mb-4'>
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
                <div>
                  <button onClick={() => {}}>add job</button>
                </div>
              </div>
              <div className='w-full mt-4 grid 2xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center items-center md:mx-2 mx-0'>
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
        </div>
      </div>
    </div>
  )
}

export default Jobs
