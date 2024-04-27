// import React from 'react'

const InputComponent = ({ label }: { label: string }) => {
  return (
    <div className=' flex  flex-col justify-center items-center mx-auto w-[90%]  sm:w-full '>
      <div className='flex flex-col w-full  '>
        <label htmlFor='' className='capitalize flex items-center text-left'>
          {label}
        </label>
        <input
          type='text'
          className='md:max-w-[400px]  border-gray-100 focus:border-[#3b82f6] outline-none  rounded-md border p-2'
        />
      </div>
    </div>
  )
}

export default InputComponent
