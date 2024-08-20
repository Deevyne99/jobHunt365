import BarChart from '../../../Components/ReuseableComponets/BarChart/BarChart'
import Card from '../../../Components/ReuseableComponets/CardComponent/Card'
import DoughnutChart from '../../../Components/ReuseableComponets/DoughnutChart/DoughnutChart'
import TableComponent from '../../../Components/ReuseableComponets/TableComponent/TableComponent'

// import React from 'react'

const Analytics = () => {
  return (
    <div className='mt-8  mx-4 flex flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center'>
        <Card title={'users'} />
        <Card title={'jobs'} />
        <Card title={'Applied Jobs'} />
        <Card title={'Agents'} />

        {/* <Card /> */}
      </div>
      <div className='flex mt-8 justify-center  gap-8'>
        <div className='w-[50%] h-[250px] md:h-[300px] '>
          <BarChart />
        </div>
        <div className='w-[50%] h-[250px] md:h-[300px]'>
          <DoughnutChart />
        </div>
      </div>
      <div className='my-8 mx-3'>
        <TableComponent />
      </div>
    </div>
  )
}

export default Analytics
