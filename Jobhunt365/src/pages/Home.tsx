// import React from 'react'

import image from '../assets/hero-section.jpg'

import SuggestedJob from '../Components/ReuseableComponets/miniJobCard/SuggestedJob'
const jobCategories = [
  { id: 1, name: 'Software Development' },
  { id: 2, name: 'Data Science' },
  { id: 3, name: 'Marketing' },
  { id: 4, name: 'Design' },
  { id: 5, name: 'Healthcare' },
  { id: 6, name: 'Education' },
  { id: 7, name: 'Finance' },
  { id: 8, name: 'Customer Service' },
  { id: 9, name: 'Engineering' },
  { id: 10, name: 'Human Resources' },
  { id: 11, name: 'Sales' },
  { id: 12, name: 'Logistics' },
  { id: 13, name: 'Content Creation' },
  { id: 14, name: 'Legal' },
  { id: 15, name: 'Freelance & Remote Work' },
  { id: 16, name: 'Freelance & Remote Work' },
]

const Home = () => {
  return (
    <div className='flex  flex-col '>
      <div className='flex flex-col gap-4 md:gap-8 mt-24 mx-4 md:mx-12'>
        <div className='flex justify-between'>
          <article className='w-[50%] flex '>
            <h2 className='text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              tenetur!
            </h2>
          </article>
          <div className='w-[50%]'>
            <img src={image} alt='' />
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-2xl '>Recent Jobs</h2>
          <div className='grid grid-cols-4  mt-6 justify-center gap-6 items-center '>
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
            <SuggestedJob />
          </div>
          <div className='flex  mt-12 flex-col justify-center'>
            <h2 className='text-center text-2xl font-semibold'>
              Trending Job Category
            </h2>
            <div className=' grid grid-cols-4 mt-6 gap-6 px-12'>
              {jobCategories.map((category) => {
                return (
                  <div
                    key={category.id}
                    className='bg-white  text-[#94a3b8] font-bold mt p-2 flex rounded-md justify-center items-center hover:shadow-xl'
                  >
                    {' '}
                    {category.name}
                  </div>
                )
              })}
            </div>
            <button className='p-2 flex justify-center items-center mt-8 bg-[#60a5fa] text-white font-semibold rounded-md w-[200px] mx-auto'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
