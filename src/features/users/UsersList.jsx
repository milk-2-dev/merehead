import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import Dropdown from '../../components/dropdown/Dropdown'
import Pagination from '../../components/pagination/Pagination'

import { useUsers } from '../../hooks'
import { createNotification } from '../../store/slices/notificationSlice'
import {
  deleteUser,
  userDeleted,
  setEditUserData,
  setEditFormState,
} from '../../store/slices/usersSlice'
import { truncateText } from '../../utils/text'

let UserItem = ({ user_id, name, surname, desc, photo }) => {
  var dropdownOptions = [
    {
      text: 'Edit',
      icon: (
        <PencilIcon
          className='-ml-1 mr-2 h-5 w-5 text-gray-500'
          aria-hidden='true'
        />
      ),
      onClick: (event) => handleEditClick(user_id),
    },
    {
      text: 'Delete',
      icon: (
        <TrashIcon
          className='-ml-1 mr-2 h-5 w-5 text-gray-500'
          aria-hidden='true'
        />
      ),
      onClick: (event) => handleDeleteClick(user_id),
    },
  ]

  const dispatch = useDispatch()

  function handleDeleteClick(id) {
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => {
        dispatch(
          createNotification({
            message: 'User was successfuly deleted',
            type: 'success',
          })
        )

        dispatch(userDeleted(id))
      })
      .catch((error) => {
        dispatch(
          createNotification({
            message: error,
            type: 'error',
          })
        )
      })
  }

  function handleEditClick(id) {
    dispatch(setEditFormState(true))
    dispatch(setEditUserData(id))
  }

  return (
    <div className=' w-full md:w-1/2 lg:w-1/3 px-2 mb-4 h-[270px]'>
      <div className='overflow-hidden relative h-full flex flex-col items-center p-5 bg-white rounded-xlg shadow-xl'>
        <div className='absolute top-1 right-1'>
          <Dropdown options={dropdownOptions} />
        </div>

        <h4 className='mb-5 max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
          {name + ' ' + surname}
        </h4>

        <p className='break-words max-w-full'>
          {desc ? truncateText(desc, 260) : ''}
        </p>
      </div>
    </div>
  )
}

const COUNT_PER_PAGE = 5

const UsersList = () => {
  const { users } = useUsers()
  const [currentPage, setCurrentPage] = useState(1)

  const currentPageUsers = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * COUNT_PER_PAGE
    const lastPageIndex = firstPageIndex + COUNT_PER_PAGE

    const usersPerPage = users.slice(firstPageIndex, lastPageIndex)

    if (usersPerPage.length === 0 && currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
    return usersPerPage
  }, [currentPage, users])

  return (
    <section
      className='max-w-screen-xl m-auto pt-[140px] px-4 lg:px-0'
      id='usersSection'
    >
      <h2 className='text-center text-4.5xl leading-10 mb-[50px] px-4'>
        Working with GET request
      </h2>

      <div className='flex flex-wrap px-2 lg:px-0 lg:-mx-2 mb-13'>
        {currentPageUsers.map((user) => {
          return <UserItem key={user._id} {...user} />
        })}
      </div>

      <div className='flex justify-center mb-5'>
        <Pagination
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={COUNT_PER_PAGE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  )
}

export default UsersList
