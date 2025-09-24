

// import heroImage from '../assets/home-screen.png'
import image_1 from '../assets/image-1.jpg'
// import { Link } from 'react-router-dom'
import SuggestedJob from '../Components/ReuseableComponets/miniJobCard/SuggestedJob'
import JobCard from '../Components/ReuseableComponets/JobCard/JobCard'
import { features, jobCategories, slider, userData } from '../data'
import Features from '../Components/Features'
import HeroSection from '../Components/ReuseableComponets/Hero/Hero'

const Home = () => {
 
  return (
    <div className='flex  flex-col bg-white  w-full overflow-hidden'>
      <HeroSection/>
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
        
      </div>
      <div className='flex mt-24 flex-col px-4 md:px-16'>
        <h2 className='text-2xl'>Job's Stories and articles</h2>
        <div className='flex md:flex-row flex-col gap-6 py-6'>

          {userData.map((items)=>{
            return(  <div className='flex flex-col gap-4 shadow-2xl'>
            <img src={image_1} alt='' />
            <article className='flex flex-col p-4 gap-4'>

            <h5 className='font-bold capitalize '> mark Joe</h5>
            <p className='text-sm leading-relaxed '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
              libero? Architecto, iusto provident quibusdam alias, laboriosam
              reiciendis expedita eos dignissimos.
            </p>
            </article>
          </div>)
          })}
         
          
          
          
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
     <footer className="bg-[#60a5fa] text-white mt-32">
  {/* Top Section */}
  <div className="max-w-7xl mx-auto px-6 py-12">
    {/* Brand */}
    <div>
      <h3 className="text-3xl font-extrabold tracking-wide text-white">JobHunt365</h3>
      <p className="text-blue-100 mt-2 text-sm text-white">
        Your trusted partner in finding the right opportunities every day.
      </p>
    </div>

    {/* Job Categories */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
      {jobCategories.map((category, i) => (
        <div key={i}>
          <h2 className="font-semibold text-lg text-white mb-3">{category.name}</h2>
          <ul className="space-y-2 text-sm text-blue-100">
            {category.examples.map((example, j) => (
              <li key={j} className="hover:text-white cursor-pointer transition text-white">
                {example}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-blue-400 py-4">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
      <p>© {new Date().getFullYear()} JobHunt365. All rights reserved.</p>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-white transition">Privacy</a>
        <a href="#" className="hover:text-white transition">Terms</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Home
