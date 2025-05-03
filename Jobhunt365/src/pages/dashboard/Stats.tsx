import AnalyticsCard from '../../Components/ReuseableComponets/AnalyticsCard/AnalyticsCard'
import AreaChartComponent from '../../Components/ReuseableComponets/AreaChart/AreaChart'
import BarChart from '../../Components/ReuseableComponets/BarChart/BarChart'
import DoughnutChart from '../../Components/ReuseableComponets/DoughnutChart/DoughnutChart'
import TableComponent from '../../Components/ReuseableComponets/TableComponent/TableComponent'
//import ProgressBar from '../../Components/ReuseableComponets/progress/ProgressBar'

const Stats = () => {
  return (
    <div className='flex flex-col mb-4 '>
      <section className='flex flex-col mx-4 mt-16 md:mx-8  '>
        <div className='mt-4 grid-cols-1 grid lg:grid-cols-4 items-center gap-4 md:grid-cols-2  justify-between'>
          <AnalyticsCard status='Pending' />
          <AnalyticsCard status='Interview' />
          <AnalyticsCard status='Declined' />
          <AnalyticsCard status='Accepted' />
        </div>

        <div className='w-full grid md:grid-cols-1 lg:grid-cols-2  gap-4  md:order-1 order-2'>
          <div className='grid grid-cols-1 w-full gap-8 mt-4   justify-center items-center'>
            <div className='w-full bg-white p-4'>
              <BarChart />
            </div>
          </div>
          <div className='flex md:flex-row flex-col mt-4  gap-4'>
            <div className='md:w-1/2 w-full bg-white flex justify-center items-center p-1'>
              <AreaChartComponent />
            </div>
            <div className='md:w-1/2 w-full '>
              <DoughnutChart />
            </div>
          </div>
        </div>
        {/* <div className='w-full md:w-[40%] gap-8 flex flex-col md:order-2 order-1'>
          <div className='flex flex-col  shadow-md bg-white p-4 gap-4 rounded-md'>
            <h3 className='text-md'>Job Type</h3>
            <ProgressBar progress={60} status='Full-Time' />
            <ProgressBar progress={40} status='Part-Time' />
            <ProgressBar progress={50} status='Contract' />
            <ProgressBar progress={70} status='Internship' />
          </div>
        </div> */}
      </section>
      <div className=' mt-4 mx-4  md:mx-8 '>
        <TableComponent />
      </div>
    </div>
  )
}

export default Stats
