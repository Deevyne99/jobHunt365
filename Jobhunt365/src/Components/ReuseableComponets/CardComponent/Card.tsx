// import React from 'react'

const Card = ({ title }: { title: string }) => {
  return (
    <div className='bg-wite p-4 flex flex-col bg-white max-w-[350px] w-full h-[150px] hover:shadow-xl'>
      <h3 className='capitalize'>{title}</h3>
      <h2>20</h2>
    </div>
  )
}

export default Card
