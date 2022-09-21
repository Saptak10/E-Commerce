import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
// import productReducer from '../features/products/productSlice'
// import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    // products: productReducer,
    // cart: cartReducer,
  },
})