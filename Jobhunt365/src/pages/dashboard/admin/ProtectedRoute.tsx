import { Outlet } from 'react-router-dom'
import Navigation from '../../../Components/ReuseableComponets/Navigation/Navigation'

// import React from 'react'

const ProtectedRoute = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <Navigation />
      </div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoute
