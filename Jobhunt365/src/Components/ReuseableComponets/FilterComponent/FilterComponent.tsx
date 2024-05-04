// import React from 'react'

const FilterComponent = () => {
  return (
    <section className='w-full p-2 max-h-screen overflow-y-scroll'>
      <aside className='p-4 flex flex-col w-full gap-6 bg-white rounded-md '>
        <div className='flex items-center justify-between  w-full'>
          <h2 className='capitalize text-sm text-[#6b7280] font-bold'>
            Filters
          </h2>
          <button className='text-sm text-[#3b82f6] font-semibold'>
            Clear All
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
            Salary
          </h3>
          <input
            type='range'
            name='salary'
            id='salary'
            min={100}
            max={2000}
            className='border-none'
          />
          <p className='text-sm font-normal text-[#6b7280]'>$3,000</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
            Job Type
          </h3>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Full-Time' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Full-Time'
            >
              Full-Time
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Part-Time' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Part-Time'
            >
              Part-Time
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Internship' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Internship'
            >
              Internship
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Contract' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Contract'
            >
              Contract
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
            Job Location
          </h3>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Remote' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Remote'
            >
              Remote
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Onsite' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Onsite'
            >
              Onsite
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Hybrid' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Hybrid'
            >
              Hybrid
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
            Status
          </h3>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Pending' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Pending'
            >
              Pending
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Interview' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Interview'
            >
              Interview
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Declined' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Declined'
            >
              Declined
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' name='Accepted' id='' />
            <label
              className='text-sm text-[#6b7280] capitalize'
              htmlFor='Accepted'
            >
              Accepted
            </label>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default FilterComponent
