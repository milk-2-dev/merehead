import React from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../store/slices/usersSlice'
import { createNotification } from '../../store/slices/notificationSlice'
import UserForm from './UserForm'

const formInitialState = {
  name: '',
  surname: '',
  desc: '',
}

const CreateUserForm = () => {
  const dispatch = useDispatch()

  const onSubmit = async (values, { resetForm }) => {
    dispatch(createUser(values))
      .then(() => {
        dispatch(
          createNotification({
            message: 'New user was created successfuly',
            type: 'success',
          })
        )
        resetForm()
      })
      .catch((error) => {
        dispatch(
          createNotification({
            message: error.message,
            type: 'error',
          })
        )
      })
  }

  return (
    <div className='flex flex-col mx-auto items-center'>
      <UserForm initialState={formInitialState} onSubmit={onSubmit} />
    </div>
  )
}

export default CreateUserForm
