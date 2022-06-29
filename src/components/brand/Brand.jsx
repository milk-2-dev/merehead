import React from 'react'
import logo from '../../assets/logo.png'

const Brand = () => {
  return (
    <a
      className='block no-underline hover:no-underline'
      aria-label='Test task'
      href='/'
    >
      <img
        className='inline-block w-[145px] h-[47px]'
        width='104px'
        height='26px'
        src={logo}
        alt=''
      />
    </a>
  )
}

export default Brand
