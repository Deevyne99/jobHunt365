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
  return (
    <div className='flex flex-col bg-white p-4 w-full max-w-[400px]  rounded-md shadow-sm'>
      <div className='flex justify-between items-start border-b border-b-gray-100 pb-4'>
        <div className='flex items-center gap-4 w-full'>
          <LogoComponent company='zoogle' imageUrl={google} />
          <div className='flex flex-col '>
            <h2 className='font-bold  max-w-[270px]'>
              Senior Frontend Developer
            </h2>
            <p className='text-sm'>Goldman Sach</p>
          </div>
        </div>
        <button>
          <FaEllipsisVertical className='text-gray-100 text-xl' />
        </button>
      </div>
      <div className='flex items-center mt-4 justify-between'>
        <div className='flex gap-2 items-center'>
          <div>
            <FaBriefcase />
          </div>
          <p>Full-Time</p>
        </div>

        <div className='flex gap-2 items-center'>
          <div>
            <FaRegCalendarDays />
          </div>
          <p>20th July,2024</p>
        </div>
      </div>
      <div className='flex items-center mt-4 justify-between '>
        <div className='flex gap-2 items-center  '>
          <div>
            <FaLocationDot />
          </div>
          <p>Nigeria</p>
        </div>
        <div className='flex gap-2 items-center'>
          <div>
            <FaLocationArrow />
          </div>
          <p>Remote</p>
        </div>
      </div>
      <div className='flex items-center mt-4 justify-between'>
        <div className='flex gap-1 items-center'>
          <p>$20K-40K/year</p>
        </div>
        <div className='flex gap-1 items-center'>
          <p className='p-1 rounded-md bg-[#fff7ed] text-[#c2410c] font-500'>
            Pending
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobCard
