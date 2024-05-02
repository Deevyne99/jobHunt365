import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'
import SuggestedJob from '../../Components/ReuseableComponets/miniJobCard/SuggestedJob'

// import React from 'react'

const Jobs = () => {
  return (
    <div className='flex flex-col w-full  '>
      <div>
        <Navigation />
      </div>
      <div className='flex w-full  px-8'>
        <div className='flex  w-[20%] bg-white mt-4 h-[700px]'></div>
        <div className='mt-4 w-[60%]  grid 2xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-center items-center mx-4 px-4 '>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>

        <div className=' flex  flex-col gap-4 w-[20%]  mt-4'>
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
          <SuggestedJob />
        </div>
      </div>
    </div>
  )
}

export default Jobs
