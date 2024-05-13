import AnalyticsCard from '../../Components/ReuseableComponets/AnalyticsCard/AnalyticsCard'

// import React from 'react'

const Stats = () => {
  return (
    <section className='flex flex-col h-screen mx-4 '>
      <div className='mt-4 grid-cols-1 grid lg:grid-cols-4 items-center gap-6 md:grid-cols-2  justify-between'>
        <AnalyticsCard status='Pending' />
        <AnalyticsCard status='Interview' />
        <AnalyticsCard status='Declined' />
        <AnalyticsCard status='Accepted' />
      </div>
    </section>
  )
}

export default Stats
