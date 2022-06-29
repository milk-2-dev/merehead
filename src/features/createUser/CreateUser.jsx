import React from 'react'
import CreateUserForm from '../users/CreateUserForm'

const CreateUser = () => {
  return (
    <section
      id='createUserSection'
      className='max-w-screen-xl m-auto pt-[140px] px-4  pb-[100px]'
    >
      <h2 className='text-center text-h2 mb-[50px] px-4 leading-10'>
        Working with POST request
      </h2>

      <CreateUserForm />
    </section>
  )
}

export default CreateUser
