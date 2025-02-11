import { useState } from 'react'
import SmallFilterComponent from '../../Components/ReuseableComponets/FilterComponent/smallFilterComponent/SmallFilterComponent'
import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'
import { FaSliders, FaSistrix } from 'react-icons/fa6'
import Modal from '../../Components/ReuseableComponets/Modal/Modal'
import FormComponent from '../../Components/ReuseableComponets/FormComponent/FormComponent'
import { FaOutdent } from 'react-icons/fa'
// import React from 'react'

const Applications = () => {
  const [openFilter, setOpenFilter] = useState(false)
  const [openAddJob, setOpenAddJob] = useState(false)

  const handleOpenAddJob = () => setOpenAddJob(!openAddJob)

  const handleOpenFilter = () => setOpenFilter(!openFilter)
  return (
    <div className='flex flex-col w-full  relative '>
      <SmallFilterComponent
        openFilter={openFilter}
        handleOpenFilter={handleOpenFilter}
      />

      <div className='flex w-full overflow-y-scroll'>
        <div className={`flex w-full  transition-margin duration-300`}>
          <div className='flex  w-full mt-16 '>
            <div className=' w-full   mt-6 flex flex-col md:px-4 px-4 max-h-screen  mb-4'>
              <div className='flex items-center gap-2 justify-center w-full'>
                <button
                  className='bg-[#60a5fa] text-lg capitalize text-white p-2 rounded-md cursor-pointer md:hidden flex'
                  onClick={() => handleOpenFilter()}
                >
                  <FaSliders />
                </button>
                <input
                  type='text'
                  className=' w-[85%] p-2 border-gray-100 focus:border-[#3b82f6] outline-none rounded-md border'
                />
                <button className='text-white text-lg capitalize bg-[#60a5fa] p-2 rounded-md cursor-pointer'>
                  <FaSistrix className='font-bold text-lg' />
                </button>
                <button
                  className='bg-[#60a5fa] p-2 text-white capitalize rounded-md'
                  onClick={() => handleOpenFilter()}
                >
                  <FaOutdent />
                </button>
                <button
                  className='bg-[#60a5fa] p-2 text-white capitalize rounded-md'
                  onClick={() => handleOpenAddJob()}
                >
                  add job
                </button>
              </div>
              <Modal openModal={openAddJob}>
                <FormComponent
                  openAddJob={openAddJob}
                  handleOpenAddJob={handleOpenAddJob}
                />
              </Modal>
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
