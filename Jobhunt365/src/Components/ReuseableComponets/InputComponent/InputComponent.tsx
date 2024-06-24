// import React from 'react'

const InputComponent = ({ label }: { label: string }) => {
  return (
    <div className=' flex  flex-col justify-center items-center mx-auto w-full   '>
      <div className='flex flex-col w-full gap-1 '>
        <label
          htmlFor=''
          className='capitalize flex items-center text-left text-sm  text-[#6b7280]'
        >
          {label}
        </label>
        <input
          type='text'
          className='md:max-w-[450px]  border-gray-100 focus:border-[#3b82f6] outline-none  rounded-md border p-2'
        />
      </div>
    </div>
  )
}

export default InputComponent
