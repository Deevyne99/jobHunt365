import LogoComponent from '../LogoComponent/LogoComponent'
import google from '../../../assets/google.png'
import {
  FaEllipsisVertical,
  FaLocationDot,
  FaLocationArrow,
  FaBriefcase,
  FaRegCalendarDays,
} from 'react-icons/fa6'
const SuggestedJob = () => {
  return (
    <div className='flex flex-col w-full bg-white h-[250px] p-4 rounded-md'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 w-full'>
          <LogoComponent company='zoogle' imageUrl={google} />
          <h1 className='text-md font-bold text-[#4b5563] truncate'>
            Goldman Sach
          </h1>
        </div>
        <button>
          <FaEllipsisVertical className='text-gray-100 text-xl ' />
        </button>
      </div>
      <div className='flex flex-col mt-2'>
        <h2 className='truncate max-w-[270px] text-sm text-[#94a3b8]'>
          Senior Frontend Developer
        </h2>
      </div>
      <div className='flex items-center mt-4 justify-between'>
        <div className='flex gap-[6px] items-center'>
          <div>
            <FaBriefcase className=' text-[#60a5fa]' />
          </div>
          <p className='text-sm text-[#6b7280]'>Full-Time</p>
        </div>

        <div className='flex gap-[6px] items-center'>
          <div>
            <FaRegCalendarDays className='text-[#fb923c]' />
          </div>
          <p className='text-sm text-[#6b7280]'>20th July,2024</p>
        </div>
      </div>

      <div className='flex items-center mt-4 justify-between '>
        <div className='flex gap-[6px] items-center  '>
          <div>
            <FaLocationDot className='text-[#f87171]' />
          </div>
          <p className='text-sm text-[#6b7280]'>Nigeria</p>
        </div>
        <div className='flex gap-[6px] items-center'>
          <div>
            <FaLocationArrow className='text-[#4ade80]' />
          </div>
          <p className='text-sm text-[#6b7280]'>Remote</p>
        </div>
      </div>
      <button className='p-2 flex justify-center items-center mt-4 bg-[#60a5fa] text-white font-semibold rounded-md w-[100px]'>
        Apply
      </button>
    </div>
  )
}

export default SuggestedJob
