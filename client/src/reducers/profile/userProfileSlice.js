import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userProfileService from './userProfileService'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  profile: user ? user : 'No user',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Fetch details of user

export const getUserDetails = createAsyncThunk('/profile', 
async (thunkAPI) => {
  try {
    return await userProfileService.getUserDetails()
  } catch (error) {
    const message = (error.response && 
      error.response.data && 
      error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
  // try {
  //   return await productService.getProducts()
  // } catch (error) {
  //   const message = (error.response && 
  //     error.response.data && 
  //     error.response.data.message) || 
  //     error.message || 
  //     error.toString()
  //   return thunkAPI.rejectWithValue(message)
  // }
})

// Login User

// export const login = createAsyncThunk('/login', 
// async (user, thunkAPI) => {
//   try {
//     return await userProfileService.login(user)
//   } catch (error) {
//     const message = (error.response && 
//       error.response.data && 
//       error.response.data.message) || 
//       error.message || 
//       error.toString()
//     return thunkAPI.rejectWithValue(message)
//   }
// })

// export const logout = createAsyncThunk('/logout', async () => { await userProfileService.logout()
// })

//Actions

export const userProfileSlice = createSlice({
  name: 'profile',
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
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.profile = 'No user'
        // state.profile = null
      })
      // .addCase(logout.fulfilled, (state) => {
      //   state.user = null
      // })
      // .addCase(login.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(login.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.isSuccess = true
      //   state.user = action.payload
      // })
      // .addCase(login.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      //   state.user = null
      // })
  },
})

export const {reset} = userProfileSlice.actions
export default userProfileSlice.reducer