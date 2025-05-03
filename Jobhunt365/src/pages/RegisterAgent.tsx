// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import InputComponent from '../Components/ReuseableComponets/InputComponent/InputComponent'
import Button from '../Components/ReuseableComponets/ButtonComponent/Button'

const RegisterAgent = () => {
  // const [phone, setPhone] = useState<string>('')
  return (
    <section className='flex flex-col items-center justify-center py-8 px-4'>
      <div className='flex flex-col gap-4 w-full max-w-[400px]'>
        <header>
          <h1 className='capitalize text-center text-2xl'>Let's get started</h1>
        </header>
        <div className='flex flex-col gap-4 md:gap-4 md:flex-row'>
          <div className='md:w-[46%] w-full'>
            <InputComponent label='first Name' />
          </div>
          <div className='md:w-[46%] w-full'>
            <InputComponent label='last Name' />
          </div>
        </div>
        <div className='w-full '>
          <InputComponent label='Email' />
        </div>
        <div className='w-full'>
          <InputComponent label='Location' />
        </div>
        <div className='w-full'>
          <InputComponent label='Phone Number' />
        </div>
        {/* <div className='w-[90%] flex mx-auto flex-col sm:w-full '>
          <label htmlFor=''>Phone Number</label>
          <div className='flex justify-center items-center flex-col w-full'>
            <PhoneInput
              placeholder='Enter phone number'
              country={'us'}
              value={phone}
              onChange={(phoneValue: string) => setPhone(phoneValue)}
              inputStyle={{
                maxWidth: '100%',
                width: '100%',
                paddingTop: '16px',
                paddingBottom: '16px',
              }}
            />
          </div>
        </div> */}
        <div className='w-full'>
          <InputComponent label='password' />
        </div>
        <div className='w-full mt-4'>
          <Button label='Sign Up' />
        </div>
        <div className='display flex justify-center items-center'>
          <p className='text-center w-[270px]'>
            Do not have an account please click{' '}
            <Link to={'/login'} className='text-light-blue capitalize'>
              {' '}
              here
            </Link>{' '}
            to Sign up
          </p>
        </div>
      </div>
    </section>
  )
}

export default RegisterAgent
