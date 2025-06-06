import React from 'react'
import { BellIcon, SearchIcon } from '../assets/icons'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 text-white'>
       <div className='flex items-center gap-8'>
        <div className='font-medium'>
          <h6>Movies</h6>
        </div>
        <div className='font-medium'>
          <h6>Series</h6>
          </div>
        <div className='font-medium'>
          <h6>Documentaries</h6>
        </div>
      </div>
      <div className='flex item-center gap-6'>
        <div>
          <img src={SearchIcon} alt="Search Icon" className="w-6 h-6" />
        </div>
        <div>
          <img src={BellIcon} alt="Search Icon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

export default Header