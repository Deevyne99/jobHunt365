// import React from 'react'
import { LogoProps } from '../../../interface/interface'

const LogoComponent = ({ company, imageUrl }: LogoProps) => {
  // Function to generate a color based on the user's initials
  const generateColor = (initials: string) => {
    const colors = [
      '#FFF3E6',
      '#f0f9ff',
      '#fefce8',
      '#fff7ed',
      '#eff6ff',
      '#fff1f2',
      '#fff7ed',
    ]

    // const colors = ['#eff6ff']
    const charCodes = initials.split('').map((char) => char.charCodeAt(0))
    const sum = charCodes.reduce((acc, val) => acc + val, 0)
    return colors[sum % colors.length]
  }

  // Function to get initials
  const getInitials = () => {
    const firstInitial = company ? company.charAt(0).toUpperCase() : ''
    return `${firstInitial}`
  }

  const backgroundColor = generateColor(getInitials())
  const textColor = '#333' // Dark color for text

  return (
    <div className='inline-block'>
      <div
        className='rounded-full h-10 w-10 flex items-center justify-center font-bold'
        style={{ backgroundColor, color: textColor }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${company} `}
            className='rounded-full h-8 w-8 object-cover'
          />
        ) : (
          getInitials()
        )}
      </div>
    </div>
  )
}

export default LogoComponent
