// import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/ReuseableComponets/ButtonComponent/Button'
import InputComponent from '../Components/ReuseableComponets/InputComponent/InputComponent'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <header>
        <h1 className='capitalize text-2xl'>jobhunt365</h1>
      </header>
      <div className='flex  flex-col gap-6 mt-4 mx-auto  justify-center items-center  w-full max-w-[400px]'>
        <div className='w-[90%] '>
          <InputComponent label={'email'} />
        </div>
        <div className='w-[90%] '>
          <InputComponent label={'Password'} />
        </div>

        <div className='w-[90%]'>
          <Button label='Login' />
        </div>
        <div>
          <p className='text-center w-[270px]'>
            Do not have an account please click{' '}
            <Link to={'/register'} className='text-light-blue capitalize'>
              {' '}
              here
            </Link>{' '}
            to Sign up
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
