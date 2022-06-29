import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    createNotification: (state, action) => {
      state.push({
        message: action.payload.message,
        type: action.payload.type,
      })
    },
  },
  extraReducers: {},
})

export const { createNotification } = notificationSlice.actions
export default notificationSlice.reducer
