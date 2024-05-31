import Navigation from '../../Components/ReuseableComponets/Navigation/Navigation'
import avatarImg from '../../assets/woman-4.jpg'
const Profile = () => {
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
      <div className='flex flex-col gap-4 mt-20 md:mt-24 mx-4 md:mx-8'>
        <div className='flex bg-white p-4 flex-col rounded-md '>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex gap-4  items-center '>
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
            </div>
            <div>
              <input type='file' />
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
      </div>
    </div>
  )
}

export default Profile
