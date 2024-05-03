// import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'

const Navigation = () => {
  return (
    <header className='flex fixed z-10  flex-col py-2 bg-white w-full shadow-sm'>
      <div className=' flex items-center justify-between mx-4 md:mx-8'>
        <h1 className='text-xl'>Jobhunt365</h1>
        <div className='flex gap-6  items-center'>
          <Link className='capitalize hover:text-light-blue' to={'/jobs'}>
            jobs
          </Link>
          <Link
            className='capitalize hover:text-light-blue'
            to={'/applications'}
          >
            Applications
          </Link>
          <Link className='capitalize hover:text-light-blue' to={'/stat'}>
            Stat
          </Link>
          <Link className='capitalize hover:text-light-blue' to={'/profile'}>
            Profile
          </Link>
        </div>
        <div>
          <Avatar firstName='Ude' lastName='banks' />
        </div>
      </div>
    </header>
  )
}

export default Navigation
