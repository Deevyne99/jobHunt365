// import React, { Children } from 'react'
// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'
import DashboardSideBar from '../../Components/ReuseableComponets/DashboardSideBar/DashboardSideBar'

const ShareLayout = () => {
  return (
    <main className='relative flex w-full '>
      <nav className='w-[25%]  '>
        <div className='full h-screen z-10 sticky top-0 left-0 '>
          <DashboardSideBar />
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
