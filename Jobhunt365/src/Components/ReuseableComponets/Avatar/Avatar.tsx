// import React from 'react'
import { AvatarProps } from '../../../interface/interface'

const Avatar = ({ firstName, lastName, imageUrl }: AvatarProps) => {
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
    const charCodes = initials.split('').map((char) => char.charCodeAt(0))
    const sum = charCodes.reduce((acc, val) => acc + val, 0)
    return colors[sum % colors.length]
  }

  // Function to get initials
  const getInitials = () => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : ''
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : ''
    return `${firstInitial}${lastInitial}`
  }

  const backgroundColor = generateColor(getInitials())
  const textColor = '#333' // Dark color for text

  return (
    <div className='inline-block'>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${firstName} ${lastName}`}
          className='rounded-full h-10 w-10 object-cover'
        />
      ) : (
        <div
          className='rounded-full h-10 w-10 flex items-center justify-center font-bold'
          style={{ backgroundColor, color: textColor }}
        >
          {getInitials()}
        </div>
      )}
    </div>
  )
}

export default Avatar
