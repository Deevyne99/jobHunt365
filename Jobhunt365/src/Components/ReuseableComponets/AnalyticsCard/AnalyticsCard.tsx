// import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
const AnalyticsCard = () => {
  return (
    <div className='flex flex-col gap-4 w-full max-w-[300px] bg-white p-4 rounded-md border-b-8 border-[#ea580c]'>
      <div className='flex justify-between items-center'>
        <div
          className={`h-[50px] w-[50px] rounded-full bg-[#fff7ed] flex justify-center items-center`}
        >
          <FaRegPaperPlane className='text-[#ea580c]' />
        </div>
        <h2 className='text-2xl text-[#ea580c] font-bold'>30</h2>
      </div>
      <h2 className='text-lg'>Pending </h2>
    </div>
  )
}

export default AnalyticsCard
