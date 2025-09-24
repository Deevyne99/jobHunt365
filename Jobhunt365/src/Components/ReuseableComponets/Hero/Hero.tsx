import { useEffect, useState } from 'react'
import {  slider} from '../../../data'
const HeroSection=()=>{


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

    return  <div className='flex flex-col md:h-[400px] h-[600px]  w-full gap-4 md:gap-8 mt-16 md:mt-24  mx-4 md:mx-12  relative items-center justify-center '>
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
                    <h2 className='text-2xl md:text-left text-center text-[#4b5563] max-w-[500px] font-bold'>
                      {title}
                    </h2>
                    <p className='text-[#4b5563] w-full  p-2 tracking-wide leading-loose text-center md:text-left'>
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
}

export default HeroSection