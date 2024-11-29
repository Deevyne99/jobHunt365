import { useEffect, useState } from 'react'

// import heroImage from '../assets/home-screen.png'
import image_1 from '../assets/image-1.jpg'
import { Link } from 'react-router-dom'
import SuggestedJob from '../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import JobCard from '../Components/ReuseableComponets/JobCard/JobCard'
import { slider } from '../data'

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
  const [productIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const lastIndex = slider.length - 1
    if (productIndex < 0) {
      setProductIndex(lastIndex)
    }
    if (productIndex > lastIndex) {
      setProductIndex(0)
    }
  }, [productIndex])

  useEffect(() => {
    const slider = setInterval(() => {
      setProductIndex(productIndex + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [productIndex])
  return (
    <div className='flex  flex-col bg-white w-full overflow-hidden'>
      <div className='flex flex-col h-[500px]  w-full gap-4 md:gap-8 mt-16 md:mt-24 mx-4 md:mx-12  relative items-center justify-center'>
        {slider.map((item, index) => {
          const { id, image, descp, title } = item
          let position = 'translate-x-full opacity-0'
          let vertical = 'translate-y-full opacity-0'

          if (productIndex === index) {
            position = 'translate-x-0 opacity-100'
            vertical = 'translate-y-0 opacity-100'
          } else if (
            index === productIndex - 1 ||
            (productIndex === 0 && index === slider.length - 1)
          ) {
            position = '-translate-x-full opacity-0'
            vertical = '-translate-y-full opacity-0'
          }
          return (
            <div
              className={`absolute top-0 left-0 w-full flex flex-col md:flex-row items-center px-16 justify-center md:justify-between md:gap-12 gap-4 transition-transform duration-300  `}
              key={id}
            >
              <article
                className={`w-full md:w-[50%] flex  flex-col transition-transform duration-500 ${position}`}
              >
                <h2 className='text-2xl text-[#94a3b8] max-w-[500px] font-bold'>
                  {title}
                </h2>
                <p className='text-[#94a3b8] max-w-[500px] tracking-wide '>
                  {descp}
                </p>
              </article>
              <div className='w-full md:w-[50%] flex gap-4'>
                <div className='flex flex-col gap-8'>
                  {slider.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`${
                          productIndex === index
                            ? 'bg-[#60a5fa]'
                            : 'bg-gray-100'
                        }  w-[5px] h-[80px]`}
                      ></div>
                    )
                  })}
                </div>
                <div
                  className={`flex transition-transform duration-500 ${vertical}`}
                >
                  <img src={image} alt='' />
                </div>
              </div>
            </div>
          )
        })}
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
                className='bg-white  text-[#94a3b8] font-bold mt p-2 flex rounded-md justify-center items-center shadow-md'
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
      <div className='flex flex-col py-12 px-4 md:px-16 mt-28 justify-center bg-[#f5f7fb]'>
        <h2 className='text-2xl '>Recent Applies</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  mt-6 justify-center gap-6 items-center '>
          <JobCard JobStatus={'Interview'} />
          <JobCard JobStatus={'Declined'} />
          <JobCard JobStatus={'Accepted'} />
          <JobCard JobStatus={'Interview'} />
          <JobCard JobStatus={'Declined'} />
          <JobCard JobStatus={'Interview'} />
          <JobCard JobStatus={'Accepted'} />
          <JobCard JobStatus={'Declined'} />
        </div>
      </div>
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
