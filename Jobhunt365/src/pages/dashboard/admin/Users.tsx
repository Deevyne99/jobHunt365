// import React from 'react'

import Card from '../../../Components/ReuseableComponets/CardComponent/Card'
import TableComponent from '../../../Components/ReuseableComponets/TableComponent/TableComponent'

const Users = () => {
  return (
    <div className='mx-4 flex flex-col mt-8'>
      <div className='grid md:grid-cols-3 gap-4'>
        <div>
          <Card title='Users' />
        </div>
        <div>
          <Card title='Admin ' />
        </div>
        <div>
          <Card title='Agents ' />
        </div>
      </div>
      <div className='mt-8'>
        <TableComponent />
      </div>
    </div>
  )
}

export default Users
