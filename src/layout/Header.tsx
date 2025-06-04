import React from 'react'
import { BellIcon, SearchIcon } from '../assets/icons'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 text-white'>
      <div className='flex items-center gap-8'>
        <div>Movies</div>
        <div>Series</div>
        <div>Documentaries</div>
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