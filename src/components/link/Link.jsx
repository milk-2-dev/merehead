import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Link = ({ href, text, to }) => {
  return (
    <HashLink
      className='inline-block bg-yellow-400 hover:bg-yellow-300 font-normal text-base text-black text-center rounded-full uppercase py-1 px-4 min-w-[100px] transition duration-150 ease-in-out'
      to={to}
      href={href}
      smooth
    >
      {text}
    </HashLink>
  )
}

export default Link
