import React from 'react'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex '>{children}</div>
}

export default ProtectedRoute
