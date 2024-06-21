// import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { FaCalendarCheck, FaCalendarXmark, FaBriefcase } from 'react-icons/fa6'
type StatusProps = {
  status: string
}
const AnalyticsCard = ({ status }: StatusProps) => {
  return (
    <div
      className={`flex flex-col gap-4 w-full h-[188px]  bg-white p-4 rounded-md shadow-md`}
    >
      <div className='flex justify-between items-center'>
        <div
          className={`h-[50px] w-[50px] rounded-full ${
            status === 'Pending'
              ? 'bg-[#fff7ed] text-[#ea580c]'
              : status === 'Interview'
              ? 'bg-[#f0f9ff] text-[#0284c7]'
              : status === 'Declined'
              ? 'bg-[#fef2f2] text-[#dc2626]'
              : 'bg-[#f0fdf4] text-[#16a34a]'
          }  flex justify-center items-center`}
        >
          {status === 'Pending' ? (
            <FaRegPaperPlane className='text-[#ea580c]' />
          ) : status === 'Interview' ? (
            <FaCalendarCheck />
          ) : status === 'Declined' ? (
            <FaCalendarXmark />
          ) : (
            <FaBriefcase />
          )}
        </div>
        <h2
          className={`text-4xl  font-bold ${
            status === 'Pending'
              ? ' text-[#ea580c]'
              : status === 'Interview'
              ? ' text-[#0284c7]'
              : status === 'Declined'
              ? ' text-[#dc2626]'
              : ' text-[#16a34a]'
          }`}
        >
          30
        </h2>
      </div>
      <h2 className='text-lg capitalize text-md text-[#6b7280] font-semibold'>
        {status}{' '}
      </h2>
    </div>
  )
}

export default AnalyticsCard
