import { Link } from 'react-router-dom'
import { data } from '../../../data'

interface SidebarProps {
  openSidebar: boolean
  handleOpenSidebar: () => void
}
const DashboardSideBar = ({ openSidebar, handleOpenSidebar }: SidebarProps) => {
  return (
    <div className='bg-white h-full   w-full '>
      <div className='py-20 px-2'>
        {' '}
        <div className=' flex  flex-col gap-12  w-full '>
          {data.map((item) => {
            return (
              <div className='flex items-center' key={item.name}>
                <Link
                  className={` 
                    
                  capitalize hover:text-[#60a5fa] flex gap-2 items-center text-[#6b7280] w-full ${
                    item.name === 'jobs' ? '' : ''
                  }  p-3`}
                  to={item.url}
                  key={item.id}
                >
                  <div
                    className={`text-[#6b7280] w-[40px] h-[40px] flex items-center justify-center hover:bg-light-blue cursor-pointer rounded-full 
                     `}
                  >
                    <item.icon
                      className={`text-[#6b7280] hover:text-[#fff] `}
                    />
                  </div>
                  <p className={`${openSidebar ? 'flex' : 'hidden'}`}>
                    {item.name}
                  </p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <button onClick={() => handleOpenSidebar()}>open</button>
    </div>
  )
}

export default DashboardSideBar
