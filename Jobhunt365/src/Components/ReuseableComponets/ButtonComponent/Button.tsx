// import React from 'react'

const Button = ({ label }: { label: string }) => {
  return (
    <div className='w-full  mx-auto  flex justify-center items-center flex-col'>
      <button className=' p-2 flex justify-center items-center mt-4 bg-[#60a5fa] text-white font-semibold rounded-md w-full capitalize'>
        {label}
      </button>
    </div>
  )
}

export default Button
