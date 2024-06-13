import AnalyticsCard from '../../Components/ReuseableComponets/AnalyticsCard/AnalyticsCard'
import BarChart from '../../Components/ReuseableComponets/BarChart/BarChart'
import DoughnutChart from '../../Components/ReuseableComponets/DoughnutChart/DoughnutChart'
import TableComponent from '../../Components/ReuseableComponets/TableComponent/TableComponent'

// import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col '>
      <section className='flex flex-col mx-4 mt-16 md:mx-8  '>
        <div className='flex gap-8 flex-col md:flex-row'>
          <div className='w-full md:w-[60%] md:order-1 order-2'>
            <div className='flex w-full gap-8 mt-4 flex-col  justify-center items-center'>
              <div className='w-full  '>
                <BarChart />
              </div>
              <div className='w-full'>
                <TableComponent />
              </div>
            </div>
          </div>
          <div className='w-full md:w-[40%] gap-6 flex flex-col md:order-2 order-1'>
            <div className='mt-4 grid-cols-1  grid lg:grid-cols-2 items-center gap-6 md:grid-cols-2  justify-between'>
              <AnalyticsCard status='Pending' />
              <AnalyticsCard status='Interview' />
              <AnalyticsCard status='Declined' />
              <AnalyticsCard status='Accepted' />
            </div>
            <DoughnutChart />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats
