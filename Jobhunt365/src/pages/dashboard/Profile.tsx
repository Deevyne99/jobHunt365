import Button from '../../Components/ReuseableComponets/ButtonComponent/Button'
import InputComponent from '../../Components/ReuseableComponets/InputComponent/InputComponent'
import Modal from '../../Components/ReuseableComponets/Modal/Modal'
import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'
import avatarImg from '../../assets/woman-4.jpg'
import { useState, useRef, ChangeEvent } from 'react'

const Profile = () => {
  const [avatar, setAvatar] = useState(avatarImg)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [openeditProfile, setOpenEditProfile] = useState(false)

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }

  const handleAction = () => {
    setOpenEditProfile(!openeditProfile)
  }
  const techSkills = [
    // Programming Languages
    'Python',
    'JavaScript',
    'Java',
    'C++',
    'C#',
    'Ruby',
    'PHP',
    'Swift',
    'Kotlin',
    'Go',
    'Rust',
    'TypeScript',
    'Objective-C',
    'SQL',
    'R',
    'Perl',
    'Scala',
    'Groovy',
    'Lua',
    'Haskell',
    'Elixir',
    'Dart',
    'Bash/Shell',
    'MATLAB',
    'Julia',

    // Frameworks
    'Angular',
    'React',
    'Vue.js',
    'Django',
    'Flask',
    'Ruby on Rails',
    'Spring',
    'Laravel',
    'Express.js',
    'ASP.NET',
    'Ember.js',
    'Backbone.js',
    'Svelte',
    'Meteor',
    'Symfony',
    'CodeIgniter',
    'Play Framework',
    'Grails',
    'Phoenix',
    'Next.js',
    'Nuxt.js',
    'Gatsby',
    'Ionic',
    'NativeScript',
    'Electron',

    // UI Skills
    'HTML',
    'CSS',
    'SASS',
    'SCSS',
    'LESS',
    'Bootstrap',
    'Material Design',
    'Tailwind CSS',
    'Foundation',
    'Bulma',
    'Semantic UI',
    'Figma',
    'Sketch',
    'Adobe XD',
    'InVision',
    'Framer',
    'Axure RP',
    'Balsamiq',
    'UXPin',
    'Zeplin',
    'Wireframing',
    'Prototyping',
    'Responsive Design',
    'Mobile First Design',
    'User Research',
    'Usability Testing',
  ]

  return (
    <div className='flex flex-col '>
      <Navigation />
      <div className='flex flex-col gap-8 mt-20 md:mt-24 mx-4 md:mx-8 mb-8'>
        <div className='flex bg-white p-4 flex-col rounded-md '>
          <div className='flex flex-col md:flex-row justify-between'>
            {/* <div className='flex gap-4  items-center '>
              <div className='h-[80px] w-[80px]'>
                <img
                  src={avatarImg}
                  alt=''
                  className='objet-cover object-center rounded-[50%] h-full w-full'
                />
              </div>
              <div className='flex flex-col'>
                <h3>Kalu Divine</h3>
                <p className='text-sm'>kaludivine545@gmail</p>
              </div>
            </div> */}
            <div className='flex gap-4 items-center'>
              <div className='h-[80px] w-[80px]'>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
                <img
                  src={avatar}
                  alt='avatar'
                  className='object-cover object-center rounded-[50%] h-full w-full'
                  onClick={() => fileInputRef.current?.click()}
                />
              </div>
              <div className='flex flex-col'>
                <h3>kalu Divine</h3>
                <p className='text-sm'>kaludivine545@gmail.com</p>
              </div>
            </div>
            <div>
              <Button label='Edit Profile' handleAction={handleAction} />
            </div>
          </div>
          <div className='mt-4 flex flex-col '>
            <h1>About</h1>
            <p className='text-sm max-w-[700px] text-[#475569] mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              consequuntur hic officiis reprehenderit pariatur cumque cum totam
              repudiandae itaque commodi, saepe aperiam dolore, neque voluptatum
              eius voluptates! Voluptatem dignissimos sapiente dolorum eum nulla
              autem doloremque iusto assumenda. Obcaecati labore molestias quas
              non qui iusto laborum. Optio vero atque voluptatem vel?
            </p>
          </div>
        </div>
        <div className='flex flex-col bg-white p-4 rounded-md'>
          <h1>Skills</h1>
          <div className='flex flex-wrap gap-4 max-w-4xl'>
            {techSkills
              .map((item) => {
                return (
                  <div
                    key={item}
                    className='rounded-xl shadow-md p-2 text-[#475569] text-sm mt-6 bg-[#f5f7fb]'
                  >
                    {item}
                  </div>
                )
              })
              .slice(0, 30)}
          </div>
        </div>
        <div className='flex flex-col bg-white rounded-md p-4'>
          <h1>Contact</h1>
          <div className='mt-4 flex flex-col gap-2 text-[#475569] text-sm'>
            <div className='flex gap-2'>
              <p>Country :</p>
              <p>Nigeria</p>
            </div>
            <div className='flex gap-2'>
              <p>Phone Number :</p>

              <p>08148158802</p>
            </div>
            <div className='flex gap-2'>
              <p>Email :</p>
              <p>kaludivine545@gmail.com</p>
            </div>
          </div>
        </div>
        <Modal openModal={openeditProfile}>
          <div
            className={` transition-transform ease-out duration-300 fixed top-0 right-0  p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[90%] overflow-y-scroll ${
              openeditProfile ? '    translate-x-0 ' : 'translate-x-full '
            }`}
          >
            <div className='flex flex-col md:flex-row gap-6 w-full  '>
              <div className='w-full md:w-1/2'>
                <InputComponent label='First Name' />
              </div>
              <div className='w-full md:w-1/2'>
                <InputComponent label='First Name' />
              </div>
            </div>
            <div className='flex  flex-col md:flex-row gap-6 w-full'>
              <div className='w-full md:w-1/2'>
                <InputComponent label='Email' />
              </div>
              <div className='w-full md:w-1/2'>
                <InputComponent label='Phone Number' />
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
              <div className='w-full md:w-1/2'>
                <InputComponent label='Country' />
              </div>
              <div className='w-full w-1/2'>
                <InputComponent label='City' />
              </div>
            </div>
            <div className='flex w-full'>
              <textarea
                className='w-full border border-gray-100'
                name=''
                id=''
                rows={4}
              ></textarea>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Profile
