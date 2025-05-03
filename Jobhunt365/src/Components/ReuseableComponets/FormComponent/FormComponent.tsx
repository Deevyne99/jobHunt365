import { FiX } from 'react-icons/fi'
import InputComponent from '../InputComponent/InputComponent'
import Dropdown from '../dropDownComponente/DropDown'
// import { useState } from 'react'
import Button from '../ButtonComponent/Button'

const FormComponent = ({
  openAddJob,
  handleOpenAddJob,
}: {
  openAddJob: boolean
  handleOpenAddJob: () => void
}) => {
  // const [openAddJob, setOpenAddJob] = useState(false)

  // const [image, setImage] = useState<string | ArrayBuffer | null>(null)
  // const fileInputRef = useRef<HTMLInputElement>(null)

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       setImage(reader.result)
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  // const handleUploadClick = () => {
  //   fileInputRef.current?.click()
  // }

  const handleSelect = (option: string) => {
    console.log('Selected option:', option)
  }
  return (
    <div
      className={` transition-transform ease-out duration-300 fixed top-0 right-0  p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[90%] overflow-y-scroll ${
        openAddJob ? '    translate-x-0 ' : 'translate-x-full '
      }`}
    >
      <button onClick={() => handleOpenAddJob()}>
        <FiX className='text-2xl' />
      </button>

      <h1 className='text-xl capitalize'>Add Applied Jobs</h1>
      <div>
        <InputComponent label='company' />
      </div>
      <div>
        <InputComponent label='Position' />
      </div>

      <div className='mt-1'>
        <Dropdown
          onSelect={handleSelect}
          options={['Internship', 'Part-time', 'Full-time', 'Contract']}
          label='Job Type'
        />
      </div>
      <div className='mt-1'>
        <Dropdown
          onSelect={handleSelect}
          options={['Remote', 'Onsite', 'Hybrid']}
          label='Job Location'
        />
      </div>
      <div className='mt-1'>
        <Dropdown
          onSelect={handleSelect}
          options={['Pending', 'Interview', 'Declined', 'Accepted']}
          label='Status'
        />
      </div>
      <div className='flex gap-4 w-full items-center'>
        <div className='w-1/2'>
          <InputComponent label='Min. Salary' />
        </div>
        <div className='w-1/2'>
          <InputComponent label='Max. Salary' />
        </div>
      </div>
      <div className='flex mt-4 flex-col items-center justify-center w-full '>
        {/* <div
         className='w-full p-2 border-2 border-dashed border-gray-100 rounded-lg cursor-pointer flex items-center justify-center bg-white'
         onClick={handleUploadClick}
       >
         {image ? (
           <img
             src={image as string}
             alt='Uploaded'
             className='object-cover w-full h-full rounded-lg'
           />
         ) : (
           <span className='text-gray-500'>Click to upload an image</span>
         )}
       </div>
       <input
         type='file'
         accept='image/*'
         ref={fileInputRef}
         className='hidden'
         onChange={handleImageChange}
       /> */}
        {/* <button
              onClick={handleUploadClick}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Upload Image
            </button> */}
      </div>
      <div className='mt-6'>
        <Button handleAction={() => {}} label='Add Job' />
      </div>
    </div>
  )
}
export default FormComponent
