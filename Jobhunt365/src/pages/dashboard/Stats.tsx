import AnalyticsCard from '../../Components/ReuseableComponets/AnalyticsCard/AnalyticsCard'
import BarChart from '../../Components/ReuseableComponets/BarChart/BarChart'
import DoughnutChart from '../../Components/ReuseableComponets/DoughnutChart/DoughnutChart'
// import TableComponent from '../../Components/ReuseableComponets/TableComponent/TableComponent'
import ProgressBar from '../../Components/ReuseableComponets/progress/ProgressBar'

// import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col mb-4'>
      <section className='flex flex-col mx-4 mt-16 md:mx-8  '>
        <div className='flex gap-8 flex-col md:flex-row'>
          <div className='w-full md:w-[60%] md:order-1 order-2'>
            <div className='flex w-full gap-8 mt-4 flex-col  justify-center items-center'>
              <div className='w-full  '>
                <BarChart />
              </div>
              <div className='w-full h-[430px]'>
                <DoughnutChart />
              </div>
            </div>
          </div>
          <div className='w-full md:w-[40%] gap-8 flex flex-col md:order-2 order-1'>
            <div className='mt-4 grid-cols-1  grid lg:grid-cols-2 items-center gap-6 md:grid-cols-2  justify-between'>
              <AnalyticsCard status='Pending' />
              <AnalyticsCard status='Interview' />
              <AnalyticsCard status='Declined' />
              <AnalyticsCard status='Accepted' />
            </div>
            <div className='flex flex-col  shadow-md bg-white p-4 gap-4 rounded-md'>
              <h3 className='text-md'>Job Type</h3>
              <ProgressBar progress={60} status='Full-Time' />
              <ProgressBar progress={40} status='Part-Time' />
              <ProgressBar progress={50} status='Contract' />
              <ProgressBar progress={70} status='Internship' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats
