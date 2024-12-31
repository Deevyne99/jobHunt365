import { Link } from 'react-router-dom'
import { data } from '../../../data'
const DashboardSideBar = () => {
  return (
    <div className='bg-white h-full   w-full '>
      <div className='py-20 px-2'>
        {' '}
        <div className=' flex  flex-col gap-6  '>
          {data.map((item) => {
            return (
              <div className='flex items-center' key={item.name}>
                <item.icon className='text-[#6b7280] flex md:hidden' />
                <Link
                  className={`hidden md:flex capitalize hover:text-[#60a5fa]  gap-2 items-center text-[#6b7280] w-full ${
                    item.name === 'jobs' ? 'bg-[#f5f7fb]' : ''
                  } p-3`}
                  to={item.url}
                  key={item.id}
                >
                  <item.icon className='text-[#6b7280] hidden md:flex' />{' '}
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DashboardSideBar
