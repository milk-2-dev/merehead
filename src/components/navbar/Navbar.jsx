import React from 'react'
import Link from '../../components/link/Link'

const Navbar = () => {
  return (
    <nav className='flex flex-grow'>
      <ul className='flex flex-grow justify-end flex-wrap items-center'>
        <li>
          <Link to='#usersSection' text='Users' />
        </li>
        <li className='ml-2'>
          <Link to='#createUserSection' text='Create new user' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
