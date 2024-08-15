// import React from 'react'

const Card = ({ title }: { title: string }) => {
  return (
    <div className='bg-wite p-4 flex flex-col bg-white max-w-[250px] w-[300px] h-[150px]'>
      <h3 className='capitalize'>{title}</h3>
      <h2>20</h2>
    </div>
  )
}

export default Card
