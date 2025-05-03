// import React, { Children } from 'react'
// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'
import DashboardSideBar from '../../Components/ReuseableComponets/DashboardSideBar/DashboardSideBar'
import { useState } from 'react'

const ShareLayout = () => {
  const [openSidebar, setSidebar] = useState(false)
  const handleOpenSidebar = () => {
    setSidebar(!openSidebar)
  }
  return (
    <main className='relative flex w-full '>
      <nav
        className={`${
          openSidebar ? 'w-[20%]' : 'w-[60px]'
        } transition-transform duration-500  md:flex hidden`}
      >
        <div className='full h-screen z-10 sticky top-0 left-0 '>
          <DashboardSideBar
            handleOpenSidebar={handleOpenSidebar}
            openSidebar={openSidebar}
          />
        </div>
      </nav>

      <section className='flex w-full  '>
        <div className='w-full    gap-4 mt-4'>
          <Outlet />
          <div className='flex flex-col'>
            <Navigation />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShareLayout
