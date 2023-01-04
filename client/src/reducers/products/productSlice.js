import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService'

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getAllProducts = createAsyncThunk('/', 
async (_, thunkAPI) => {
  try {
    return await productService.getAllProducts()
  } catch (error) {
    const message = (error.response && 
      error.response.data && 
      error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Get Profuct By Id
// export const getProduct = createAsyncThunk(
//   '/products/:id',
//   async (id, thunkAPI) => {
//     try {
//       // const token = thunkAPI.getState().auth.user.token
//       return await productService.getProduct(id)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // .addCase(getProduct.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(getProduct.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     // state.products = action.payload
        //     state.products = state.products.filter(
        //       (product) => product._id === action.payload.id
        //     )
        // })
        // .addCase(getProduct.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload
        // })
    },
})

export const {reset} = productSlice.actions
export default productSlice.reducer