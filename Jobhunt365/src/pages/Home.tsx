import { useEffect, useState } from 'react'

// import heroImage from '../assets/home-screen.png'
import image_1 from '../assets/image-1.jpg'
// import { Link } from 'react-router-dom'
import SuggestedJob from '../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import JobCard from '../Components/ReuseableComponets/JobCard/JobCard'
import { features, jobCategories, slider } from '../data'
import Features from '../Components/Features'

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
    <div className='flex  flex-col bg-white  w-full overflow-hidden'>
      <div className='flex flex-col md:h-[400px] h-[600px]  w-full gap-4 md:gap-8 mt-16 md:mt-24  mx-4 md:mx-12  relative items-center justify-center '>
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
              className={` absolute top-0 left-0 w-full flex flex-col md:flex-row items-center pr-8 md:pr-24 justify-center md:justify-between md:gap-12 gap-4 transition-transform duration-300 mx-auto `}
              key={id}
            >
              <article
                className={`w-full md:w-[50%] flex max-w-[600px] flex-col transition-transform duration-400  ${position}`}
              >
                <h2 className='text-2xl md:text-left text-center text-[#94a3b8] max-w-[500px] font-bold'>
                  {title}
                </h2>
                <p className='text-[#94a3b8] w-full  p-2 tracking-wide leading-loose text-center md:text-left'>
                  {descp}
                </p>
                <button className='p-2 flex justify-center items-center mt-8 bg-[#60a5fa] text-white font-semibold rounded-md w-[200px] mx-auto md:mx-0'>
                  Get Started
                </button>
              </article>
              <div className='w-full  md:w-[50%] md:flex-row flex-col flex md:gap-4 gap-0 justify-center items-center'>
                <div className='flex md:flex-col gap-8 flex-row order-2 md:order-1 justify-center items-center '>
                  {slider.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`${
                          productIndex === index
                            ? 'bg-[#60a5fa]'
                            : 'bg-gray-100'
                        }  md:w-[5px] md:h-[80px] w-[40px] h-[5px] md:mt-0 mt-4 `}
                      ></div>
                    )
                  })}
                </div>
                <div
                  className={`justify-center items-center flex transition-transform duration-400 order-1 md:order-2 w-full ${vertical} `}
                >
                  <img src={image} alt='' className='w-full  ' />
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
        <h2 className='text-center text-2xl font-semibold'>Features Section</h2>
        <div className='flex md:flex-row flex-col justify-center items-center mt-8 mx-4 md:mx-16 gap-6'>
          {features.map((item) => {
            // const {id,description,name,icon} = item
            return <Features key={item.id} {...item} />
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
      <footer className='flex flex-col border gap-4 border-l-0 border-r-0 border-b-0 border-[#ccc] mt-32 bg-[#60a5fa] p-4 md:p-16'>
        <div>
          <h3 className='text-[#fff] font-bold text-2xl'>JobHunt365</h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 mt-2 text-[#fff] font-semibold'>
          {jobCategories.map((item) => {
            return (
              <div className='gap-y-4'>
                <h2>{item.name}</h2>
                <div className='mt-2 flex flex-col gap-2'>
                  {item.examples.map((item) => {
                    return (
                      <div className=' gap-4'>
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex gap-4 items-center'></div>
      </footer>
    </div>
  )
}

export default Home
