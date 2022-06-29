import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import notificationReducer from './slices/notificationSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    notifications: notificationReducer,
  },
})

export default store
