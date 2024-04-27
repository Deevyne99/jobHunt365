import LogoComponent from '../LogoComponent/LogoComponent'
import google from '../../../assets/google.png'
// import React from 'react'

const JobCard = () => {
  return (
    <div className='flex flex-col bg-white p-4 w-[300px]  rounded-md shadow-sm'>
      <LogoComponent company='zoogle' imageUrl={google} />
    </div>
  )
}

export default JobCard
