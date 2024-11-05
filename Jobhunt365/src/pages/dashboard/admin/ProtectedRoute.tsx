import { Link, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return (
    <div className='flex '>
      {/* Fixed Sidebar */}
      <aside className='fixed top-0 md:left-0 h-full  w-[250px] bg-white shadow-sm z-10 left-[-300px]'>
        <nav className='flex flex-col gap-4 px-4 mt-24'>
          <Link to={'/admin/dashboard/'}>Home</Link>
          <Link to={'/admin/dashboard/users'}>Users</Link>
          <Link to={'/admin/dashboard/jobs'}>Jobs</Link>
          <Link to={'/admin/dashboard/applied-jobs'}>Applied Jobs</Link>
        </nav>
      </aside>

      {/* Main Content Section */}
      <section className='ml-0 md:ml-[250px] flex-1'>
        {/* Fixed Header */}
        <div className='fixed top-0 left-0 md:left-[250px] w-full md:w-[calc(100%-250px)] bg-white h-[50px] z-20'></div>

        {/* Main Content */}
        <div className='pt-[50px]'>
          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default ProtectedRoute
