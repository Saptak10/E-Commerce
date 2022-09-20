import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Register User

export const register = createAsyncThunk('/register', 
async (user, thunkAPI) => {
  try {
    return await userService.register(user)
  } catch (error) {
    const message = (error.response && 
      error.response.data && 
      error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout',
async () => {
  await userService.logout()
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})

export const {reset} = userSlice.actions
export default userSlice.reducer