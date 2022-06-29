import React from 'react'
import { Brand, Navbar } from '../../components'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full z-30 '>
      <div className='max-w-screen-xl mx-auto px-6 border-b-1 border-white'>
        <div className='flex items-center justify-between py-5'>
          <div className='flex-shrink-0 mr-[14px]'>
            <Brand />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
