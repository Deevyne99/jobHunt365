import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'

// import React from 'react'

const Jobs = () => {
  return (
    <div className='flex flex-col w-full '>
      <div>
        <Navigation />
      </div>
      <div className='flex gap-4 '>
        <div className='flex w-[20%] bg-white mt-4'></div>
        <div className='mt-4 w-[60%]  2xl:ml-4  grid 2xl:grid-cols-4 lg:grid-cols-2 gap-4 justify-center items-center '>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className=' flex w-[20%] bg-white ml-auto mt-4'></div>
      </div>
    </div>
  )
}

export default Jobs
