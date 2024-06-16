import React from 'react'

interface ProgressBarProps {
  progress: number // progress value between 0 and 100
  status: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, status }) => {
  return (
    <div className='flex flex-col '>
      <p>{status}</p>
      <div className='w-full bg-[#eee] rounded-full h-4 mt-2'>
        <div
          className='bg-blue-500 h-4 rounded-full transition-all duration-300'
          style={{
            width: `${progress}%`,
            background: ` ${
              status === 'Full-Time'
                ? '#ea580c'
                : status === 'Part-Time'
                ? '#0284c7'
                : status === 'Internship'
                ? '#dc2626'
                : status === 'Contract'
                ? '#16a34a'
                : '#eee'
            }`,
          }}
        ></div>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <p>24</p>
        <p>+12%</p>
      </div>
    </div>
  )
}

export default ProgressBar
