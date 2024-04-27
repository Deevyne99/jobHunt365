// import React from 'react'

const Button = () => {
  return (
    <div className='w-[90%]  mx-auto sm:w-full flex justify-center items-center flex-col'>
      <button
        className='  max-w-[400px] w-full text-white capitalize bg-light-blue p-2 rounded-md cursor-pointer'
        disabled={true}
      >
        Login
      </button>
    </div>
  )
}

export default Button
