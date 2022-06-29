import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEditFormState,
  updateUser,
  userUpdated,
} from '../../store/slices/usersSlice'
import UserForm from './UserForm'
import { createNotification } from '../../store/slices/notificationSlice'

const EditUser = () => {
  const { editState, editUserData } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const onSubmit = async (values, { resetForm }) => {
    const { name, surname, desc, user_id } = values

    const valuesToSend = {
      name,
      surname,
      desc,
    }

    dispatch(updateUser({ userData: valuesToSend, id: user_id }))
      .then((response) => {
        dispatch(
          userUpdated({
            userData: response.payload,
            id: user_id,
          })
        )
        dispatch(
          createNotification({
            message: 'User was updated successfuly',
            type: 'success',
          })
        )
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
    <Transition.Root show={editState} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          dispatch(setEditFormState(false))
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-half-transparent transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                <div className='flex flex-col items-center bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <UserForm initialState={editUserData} onSubmit={onSubmit} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default EditUser
