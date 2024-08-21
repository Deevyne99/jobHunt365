// import React from 'react'

import Card from '../../../Components/ReuseableComponets/CardComponent/Card'
import TableComponent from '../../../Components/ReuseableComponets/TableComponent/TableComponent'

const Users = () => {
  return (
    <div className='mx-4 flex flex-col mt-8'>
      <div className='grid md:grid-cols-4 gap-4'>
        <div>
          <Card title='Total' />
        </div>
        <div>
          <Card title='Accepted ' />
        </div>
        <div>
          <Card title='Pending ' />
        </div>
        <div>
          <Card title='Rejected ' />
        </div>
      </div>
      <div className='my-8'>
        <TableComponent />
      </div>
    </div>
  )
}

export default Users
