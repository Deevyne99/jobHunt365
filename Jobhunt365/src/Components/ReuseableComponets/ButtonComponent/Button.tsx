// import React from 'react'

const Button = ({ label }: { label: string }) => {
  return (
    <div className='w-full  mx-auto sm:w-full flex justify-center items-center flex-col'>
      <button
        className='  max-w-[450px] w-full text-white capitalize bg-light-blue p-2 rounded-md cursor-pointer'
        disabled={true}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
