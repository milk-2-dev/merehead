import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllUsers } from '../store/slices/usersSlice'

const useUsers = () => {
  const { users, loading } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  return { users, loading }
}

export default useUsers
