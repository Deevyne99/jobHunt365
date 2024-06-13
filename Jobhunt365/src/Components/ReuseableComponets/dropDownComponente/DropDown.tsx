// src/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react'

interface DropdownProps {
  options: string[]
  placeholder?: string
  onSelect: (option: string) => void
  label: string
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onSelect,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <label htmlFor='' className=''>
        {label}
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full px-4 py-2 mt-1 text-left bg-white border border-gray-100 focus:border-[#3b82f6] rounded shadow-sm focus:outline-none   focus:border-blue-500'
      >
        {selectedOption || placeholder}
      </button>
      {isOpen && (
        <div className='absolute w-full mt-2 bg-white border border-gray-100 rounded shadow-lg z-10'>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selectedOption === option
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-white'
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
