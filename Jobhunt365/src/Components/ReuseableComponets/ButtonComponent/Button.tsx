// import React from 'react'

const Button = ({
  label,
  handleAction,
}: {
  label: string
  handleAction: () => void
}) => {
  return (
    <div className='w-full  mx-auto  flex justify-center items-center flex-col'>
      <button
        onClick={() => handleAction()}
        className=' p-2 flex justify-center items-center mt-4 bg-[#60a5fa] text-white font-semibold rounded-md w-full capitalize'
      >
        {label}
      </button>
    </div>
  )
}

export default Button
