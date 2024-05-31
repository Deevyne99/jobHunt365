import { useState } from 'react'
import LogoComponent from '../LogoComponent/LogoComponent'
import {
  FaEllipsisVertical,
  FaBriefcase,
  FaLocationDot,
  FaRegCalendarDays,
  FaLocationArrow,
} from 'react-icons/fa6'
import google from '../../../assets/google.png'

const JobCard = () => {
  const [status, setStatus] = useState('Pending')
  const [modal, setModal] = useState(false)

  return (
    <div className='relative flex flex-col bg-white p-4 w-full  xl:max-w-[400px]  rounded-md shadow-sm'>
      <div className='flex justify-between items-start border-b border-b-gray-100 pb-4'>
        <div className='flex items-center gap-4 w-full'>
          <LogoComponent company='xoogle' imageUrl={google} />
          <div className='flex flex-col '>
            <h2 className='font-bold text-[#4b5563]  max-w-[270px]'>
              Senior Frontend Developer
            </h2>
            <p className='text-sm text-[#94a3b8]'>Goldman Sach</p>
          </div>
        </div>
        <button onClick={() => setModal(!modal)}>
          <FaEllipsisVertical className='text-gray-100 text-xl' />
        </button>
      </div>
      <div className='flex items-center mt-4 justify-between'>
        <div className='flex gap-2 items-center'>
          <div>
            <FaBriefcase className=' text-[#60a5fa]' />
          </div>
          <p className='text-sm text-[#6b7280]'>Full-Time</p>
        </div>

        <div className='flex gap-2 items-center'>
          <div>
            <FaRegCalendarDays className='text-[#fb923c]' />
          </div>
          <p className='text-sm text-[#6b7280]'>20th July,2024</p>
        </div>
      </div>
      <div className='flex items-center mt-4 justify-between '>
        <div className='flex gap-2 items-center  '>
          <div>
            <FaLocationDot className='text-[#f87171]' />
          </div>
          <p className='text-sm text-[#6b7280]'>Nigeria</p>
        </div>
        <div className='flex gap-2 items-center'>
          <div>
            <FaLocationArrow className='text-[#4ade80]' />
          </div>
          <p className='text-sm text-[#6b7280]'>Remote</p>
        </div>
      </div>
      <div className='flex items-center mt-4 justify-between'>
        <div className='flex gap-1 items-center'>
          <p className='text-sm text-[#6b7280]'>$20K-40K/year</p>
        </div>
        <div className='flex gap-1 items-center'>
          <p
            className={`p-1 rounded-md text-sm font-bold ${
              status === 'Pending'
                ? 'bg-[#fff7ed] text-[#ea580c]'
                : status === 'Interview'
                ? 'bg-[#f0f9ff] text-[#0284c7]'
                : status === 'Declined'
                ? 'bg-[#fef2f2] text-[#dc2626]'
                : 'bg-[#f0fdf4] text-[#16a34a]'
            }  `}
          >
            {status}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 p-2  absolute top-12 rounded-md right-[-10px] transition-all duration-300 w-[130px] h-[80px] bg-white shadow-xl ${
          modal ? ' ' : 'hidden'
        }`}
      >
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default JobCard
