import { FaBriefcase } from 'react-icons/fa6'
import { FaPaperPlane, FaSignal, FaUser, FaFileSignature } from 'react-icons/fa'
// import { FaFileSignature } from 'react-icons/fa6'
import { SlCalender } from 'react-icons/sl'
import { MdDashboard } from 'react-icons/md'
import { IoSearchOutline } from 'react-icons/io5'
export const data = [
  { name: 'jobs', url: '/dashboard/', id: 1, icon: FaBriefcase },
  {
    name: 'Applications',
    url: '/dashboard/applications',
    id: 2,
    icon: FaPaperPlane,
  },
  { name: 'stat', url: '/dashboard/stat', id: 3, icon: FaSignal },
  { name: 'profile', url: '/dashboard/profile', id: 4, icon: FaUser },
]

export const slider = [
  {
    id: 1,
    image: '/landing-page.png',
    title: ' Better Job experience',
    descp:
      ' Quae, dolore minus. Ducimus nisiquibusdam optio illum delectus, repudiandae voluptatum impeditexplicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atquesaepe dignissimo repudiandae voluptatum impeditexplicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atquesaepe dignissimo',
  },
  {
    id: 2,
    image: '/landing-page.png',
    title: 'Getting Job experience',
    descp:
      ' Quae, dolore minus. Ducimus nisiquibusdam optio illum delectus, repudiandae voluptatum impeditexplicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atquesaepe dignissimo repudiandae voluptatum impeditexplicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atquesaepe dignissimo',
  },
  {
    id: 3,
    image: '/landing-page.png',
    title: ' Best  Job experience',
    descp:
      ' Quae, dolore minus. Ducimus nisiquibusdam optio illum delectus, repudiandae voluptatum impeditexplicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atquesaepe dignissimo repudiandae voluptatum impeditexplicabo, esse, rerum voluptatibus eos! Ducimus blanditiis atquesaepe dignissimo',
  },
]

export const features = [
  {
    id: 1,
    icon: FaFileSignature,
    description:
      'is a core feature of a job tracking application that helps users organize and monitor their job search process. ',
    name: 'Appication Management',
  },
  {
    id: 2,
    icon: SlCalender,
    description:
      'are essential features in a job tracking application that keep users informed and on schedule.  ',
    name: 'Reminders and Notifications',
  },
  {
    id: 3,
    icon: MdDashboard,
    description:
      ' is a powerful feature in a job tracking application that provides users with insights into their job search progress.  ',
    name: 'Analytics Dashboard',
  },
  {
    id: 4,
    icon: IoSearchOutline,
    description:
      'is a feature in a job tracking application that helps users save and manage job listings from various sources.  ',
    name: 'Job Search Organizer',
  },
]
