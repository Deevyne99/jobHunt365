// import React from 'react'

import image from '../assets/hero-section.jpg'
// import heroImage from '../assets/home-screen.png'
import image_1 from '../assets/image-1.jpg'
import { Link } from 'react-router-dom'
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
    <div className='flex  flex-col bg-white'>
      <div className='flex flex-col gap-4 md:gap-8 mt-16 md:mt-24 mx-4 md:mx-12'>
        <div className='flex gap-8 md:flex-row flex-col justify-between items-center '>
          <article className='w-full md:w-[50%] flex  flex-col'>
            <h2 className='text-2xl text-[#94a3b8] max-w-[500px] font-bold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              tenetur!
            </h2>
            <p className='text-[#94a3b8] max-w-[500px] tracking-wide '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
              at sapiente excepturi animi sunt accusamus molestiae temporibus
              quos a. Iure commodi fugiat, assumenda incidunt aliquid itaque,
              nesciunt labore ratione nisi, perferendis nihil quod numquam quas
              quos nam odit cupiditate. Quae, dolore minus. Ducimus nisi
              quibusdam optio illum delectus, repudiandae voluptatum impedit
              explicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atque,
              saepe dignissimo.
            </p>
          </article>
          <div className='w-full md:w-[50%]'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
      <div className='flex flex-col py-12 px-4 md:px-16 mt-28 justify-center bg-[#f5f7fb]'>
        <h2 className='text-2xl '>Recent Jobs</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  mt-6 justify-center gap-6 items-center '>
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
          <div className=' grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-6 gap-6 px-12'>
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
      <div className='flex mt-24 flex-col px-4 md:px-16'>
        <h2 className='text-2xl'>Job's Stories and articles</h2>
        <div className='flex md:flex-row flex-col gap-6 py-6'>
          <div className='flex flex-col gap-4'>
            <img src={image_1} alt='' />
            <p className='text-[#94a3b8] text-sm leading-relaxed'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
              libero? Architecto, iusto provident quibusdam alias, laboriosam
              reiciendis expedita eos dignissimos.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={image_1} alt='' />
            <p className='text-[#94a3b8] text-sm leading-relaxed'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
              libero? Architecto, iusto provident quibusdam alias, laboriosam
              reiciendis expedita eos dignissimos.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={image_1} alt='' />
            <p className='text-[#94a3b8] text-sm leading-relaxed'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
              libero? Architecto, iusto provident quibusdam alias, laboriosam
              reiciendis expedita eos dignissimos.
            </p>
          </div>
          <div className='flex flex-col gap-4 '>
            <img src={image_1} alt='' />
            <p className='text-[#94a3b8] text-sm leading-relaxed'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
              libero? Architecto, iusto provident quibusdam alias, laboriosam
              reiciendis expedita eos dignissimos.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <h2>Frequently asked Questions</h2>
      </div> */}
      <footer className='flex flex-col border border-l-0 border-r-0 border-b-0 border-[#ccc] mt-12'>
        <div className='flex justify-between p-4'>
          <Link className='text-[#94a3b8] font-bold' to={'/'}>
            Home
          </Link>
          <Link className='text-[#94a3b8] font-bold' to={'/register'}>
            Register
          </Link>
          <Link className='text-[#94a3b8] font-bold' to={'/login'}>
            Login
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
