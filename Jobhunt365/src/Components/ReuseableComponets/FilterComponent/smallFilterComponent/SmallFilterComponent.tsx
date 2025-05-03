// import React from 'react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { FiX } from 'react-icons/fi'
type SmallFilterProps = {
  openFilter: boolean
  handleOpenFilter: () => void
}
const SmallFilterComponent = ({
  openFilter,
  handleOpenFilter,
}: SmallFilterProps) => {
  const [isJobtype, setJobType] = useState(true)
  const [isJobLocation, setJobLocation] = useState(false)
  const [status, setStatus] = useState(false)
  return (
    <div
      className={`transition-transform ease-out duration-300 fixed top-0 right-0  p-4 gap-6 flex flex-col bg-white h-full max-w-[300px] w-[90%] overflow-y-scroll ${
        openFilter ? '    translate-x-0 ' : 'translate-x-full '
      }`}
    >
      <section className='w-full  p-2 max-h-screen overflow-y-scroll overflow-x-hidden'>
        <aside className='p-4 flex flex-col w-full min-h-screen gap-6 bg-white rounded-md '>
          <div className='mt-12 flex flex-col gap-4    w-full'>
            <button
              className='text-light-blue text-lg ml-auto '
              onClick={() => handleOpenFilter()}
            >
              <FiX />
            </button>
            <button className='text-sm text-[#3b82f6] font-semibold mr-auto'>
              Clear All
            </button>
          </div>
          <div className='grid  gap-4'>
            <div>
              <h2 className='capitalize text-md text-[#6b7280] font-bold'>
                Filters
              </h2>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
                Salary
              </h3>
              <input
                type='range'
                name='salary'
                id='salary'
                min={100}
                max={2000}
                className='border-none w-[200px]'
              />
              <p className='text-sm font-normal text-[#6b7280]'>$3,000</p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4 items-center'>
                <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
                  Job Type
                </h3>
                <button
                  className='text-[#6b7280] text-sm'
                  onClick={() => setJobType(!isJobtype)}
                >
                  {isJobtype ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {isJobtype && (
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Full-Time' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Full-Time'
                    >
                      Full-Time
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Part-Time' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Part-Time'
                    >
                      Part-Time
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Internship' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Internship'
                    >
                      Internship
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Contract' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Contract'
                    >
                      Contract
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex w-[300px] gap-4 items-center'>
                <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
                  Job Location
                </h3>
                <button
                  className='text-[#6b7280] text-sm'
                  onClick={() => setJobLocation(!isJobLocation)}
                >
                  {isJobLocation ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {isJobLocation && (
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Remote' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Remote'
                    >
                      Remote
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Onsite' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Onsite'
                    >
                      Onsite
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Hybrid' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Hybrid'
                    >
                      Hybrid
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4 items-center'>
                <h3 className='capitalize text-sm text-[#6b7280] font-semibold'>
                  Status
                </h3>
                <button
                  className='text-[#6b7280] text-sm'
                  onClick={() => setStatus(!status)}
                >
                  {status ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {status && (
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Pending' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Pending'
                    >
                      Pending
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Interview' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Interview'
                    >
                      Interview
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Declined' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Declined'
                    >
                      Declined
                    </label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input type='checkbox' name='Accepted' id='' />
                    <label
                      className='text-sm text-[#6b7280] capitalize'
                      htmlFor='Accepted'
                    >
                      Accepted
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='capitalize text-md text-[#6b7280] font-bold'>
                Sort
              </h2>
              <div className='flex gap-3 items-center'>
                <input type='checkbox' name='a-z' id='' />
                <label
                  className='text-sm text-[#6b7280] capitalize'
                  htmlFor='a-z'
                >
                  A-Z
                </label>
              </div>
              <div className='flex gap-3 items-center'>
                <input type='checkbox' name='z-a' id='' />
                <label
                  className='text-sm text-[#6b7280] capitalize'
                  htmlFor='z-a'
                >
                  Z-A
                </label>
              </div>
              <div className='flex gap-3 items-center'>
                <input type='checkbox' name='latest' id='' />
                <label
                  className='text-sm text-[#6b7280] capitalize'
                  htmlFor='latest'
                >
                  latest
                </label>
              </div>
              <div className='flex gap-3 items-center'>
                <input type='checkbox' name='oldest' id='' />
                <label
                  className='text-sm text-[#6b7280] capitalize'
                  htmlFor='oldest'
                >
                  oldest
                </label>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default SmallFilterComponent
