import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import usersService from '../../services/users'

const initialState = {
  editState: false,
  editUserData: {},
  loading: 'idle',
  users: [],
}

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await usersService.getAllUsers()
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const createUser = createAsyncThunk(
  'users/createUser',
  async (userData, thunkAPI) => {
    try {
      const response = await usersService.createUser(userData)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, thunkAPI) => {
    try {
      const response = await usersService.deleteUser(id)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ userData, id }, thunkAPI) => {
    try {
      const response = await usersService.updateUser(userData, id)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userDeleted: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.user_id !== action.payload
      })
    },
    setEditFormState: (state, action) => {
      state.editState = action.payload
    },
    setEditUserData: (state, action) => {
      const [userData] = state.users.filter((user) => {
        return user.user_id === action.payload
      })

      state.editUserData = userData
    },
    userUpdated: (state, action) => {
      const { id, userData } = action.payload
      let userIndex = state.users.findIndex((user) => {
        return user.user_id === id
      })

      state.users[userIndex] = { ...state.users[userIndex], ...userData }
      state.editState = false
    },
  },
  extraReducers: {
    [fetchAllUsers.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.users = action.payload
      }
    },
    [fetchAllUsers.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
    },
    [createUser.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    [createUser.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.users.push(action.payload)
      }
    },
    [createUser.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
    },
    [deleteUser.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    [deleteUser.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
    },
    [deleteUser.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
    },
  },
})

export const { userDeleted, setEditUserData, setEditFormState, userUpdated } =
  usersSlice.actions
export default usersSlice.reducer
