import JobCard from '../../Components/ReuseableComponets/JobCard/JobCard'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'

// import React from 'react'

const Jobs = () => {
  return (
    <div className='h-screen'>
      <div>
        <Navigation />
      </div>
      <div className='mt-4  flex gap-4'>
        <JobCard />
      </div>
    </div>
  )
}

export default Jobs
