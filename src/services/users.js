import axios from 'axios'

const getAllUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
  return response.data
}

const createUser = async ({ name, surname, desc }) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
    name,
    surname,
    desc,
  })
  return response.data
}

const deleteUser = async (userId) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}/user/${userId}`
  )
  return response.data
}

const updateUser = async (userData, userId) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}/user/${userId}`,
    userData
  )
  return response.data
}

const usersService = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
}

export default usersService
