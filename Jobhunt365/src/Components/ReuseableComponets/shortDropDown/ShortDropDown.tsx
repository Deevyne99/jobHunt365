// import React from 'react'

const ShortDropDown = () => {
  return (
    <div className='flex flex-col bg-white w-full p-4 shadow-lg'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-3 items-center'>
          <input type='checkbox' name='a-z' id='' />
          <label className='text-sm text-[#6b7280] capitalize' htmlFor='a-z'>
            Full Time
          </label>
        </div>
        <div className='flex gap-3 items-center'>
          <input type='checkbox' name='z-a' id='' />
          <label className='text-sm text-[#6b7280] capitalize' htmlFor='z-a'>
            Remote
          </label>
        </div>
        <div className='flex gap-3 items-center'>
          <input type='checkbox' name='latest' id='' />
          <label className='text-sm text-[#6b7280] capitalize' htmlFor='latest'>
            Internship
          </label>
        </div>
        <div className='flex gap-3 items-center'>
          <input type='checkbox' name='oldest' id='' />
          <label className='text-sm text-[#6b7280] capitalize' htmlFor='oldest'>
            Contract
          </label>
        </div>
      </div>
    </div>
  )
}

export default ShortDropDown
