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
    <div className='flex flex-col w-full bg-white h-[200px] p-4 rounded-md'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 w-full'>
          <LogoComponent company='zoogle' imageUrl={google} />
          <h1 className='text-md font-bold'>Goldman Sach</h1>
        </div>
        <button>
          <FaEllipsisVertical className='text-gray-100 text-xl' />
        </button>
      </div>
      <div className='flex flex-col mt-4'>
        <h2 className='font-bold text-sm  max-w-[270px]'>
          Senior Frontend Developer
        </h2>
      </div>
      <div className='flex items-center mt-4 justify-between'>
        <div className='flex gap-2 items-center'>
          <div>
            <FaBriefcase />
          </div>
          <p className='text-sm'>Full-Time</p>
        </div>

        <div className='flex gap-2 items-center'>
          <div>
            <FaRegCalendarDays />
          </div>
          <p className='text-sm'>20th July,2024</p>
        </div>
      </div>

      <div className='flex items-center mt-4 justify-between '>
        <div className='flex gap-2 items-center  '>
          <div>
            <FaLocationDot />
          </div>
          <p className='text-sm'>Nigeria</p>
        </div>
        <div className='flex gap-2 items-center'>
          <div>
            <FaLocationArrow />
          </div>
          <p className='text-sm'>Remote</p>
        </div>
      </div>
    </div>
  )
}

export default SuggestedJob
