import React from 'react'
import rewardImg from '../../assets/clutch-2021.png'
import Link from '../../components/link/Link'

const Hero = () => {
  return (
    <section
      className='h-screen pt-[148px] pb-[60px] px-4 bg-hero-bg bg-cover bg-no-repeat relative z-0
    after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-half-transparent after:-z-10'
    >
      <div className='max-w-[800px] m-auto h-full flex flex-col justify-center items-start'>
        <h1 className='text-white text-h1 leading-10 font-bold  mb-5 uppercase '>
          Fintech and Blockchain solutions
        </h1>

        <div className='flex content-center mb-8'>
          <p className='flex items-center text-white max-w-[660px]  leading-6.2'>
            An unmatched experience, well-rounded technical expertise, and
            in-depth capabilities in fintech and blockchain industries.
          </p>
          <img
            className='w-[120px] h-[120px] ml-5'
            src={rewardImg}
            alt='reward top blockchain companies 2021'
            width='100%'
          ></img>
        </div>

        <Link href='' text='Create new user' to='#createUserSection' />
      </div>
    </section>
  )
}

export default Hero
