// import React from 'react'

const Card = ({ title }: { title: string }) => {
  return (
    <div className='bg-wite p-4 flex flex-col bg-white w-full h-[150px] hover:shadow-xl'>
      <h3 className='capitalize'>{title}</h3>
      <div></div>
      <div className='flex flex-col mt-auto'>
        <h2 className='text-2xl text-[#6b7280]'>20</h2>
      </div>
    </div>
  )
}

export default Card
