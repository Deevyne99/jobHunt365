// import React from 'react'
// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'

const ShareLayout = () => {
  return (
    <main className=' flex flex-col'>
      <div>
        <Navigation />
      </div>

      <Outlet />
    </main>
  )
}

export default ShareLayout
