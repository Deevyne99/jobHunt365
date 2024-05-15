import AnalyticsCard from '../../Components/ReuseableComponets/AnalyticsCard/AnalyticsCard'
import BarChart from '../../Components/ReuseableComponets/BarChart/BarChart'
import DoughnutChart from '../../Components/ReuseableComponets/DoughnutChart/DoughnutChart'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'

// import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col '>
      <Navigation />
      <section className='flex flex-col mx-4 mt-16 md:mx-8  '>
        <div className='mt-4 grid-cols-1  grid lg:grid-cols-4 items-center gap-6 md:grid-cols-2  justify-between'>
          <AnalyticsCard status='Pending' />
          <AnalyticsCard status='Interview' />
          <AnalyticsCard status='Declined' />
          <AnalyticsCard status='Accepted' />
        </div>
        <div className='flex w-full gap-8 mt-8 flex-col md:flex-row justify-center items-center'>
          <div className='w-full md:w-[50%] '>
            <BarChart />
          </div>
          <div className='w-full md:w-[50%] '>
            <DoughnutChart />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats
