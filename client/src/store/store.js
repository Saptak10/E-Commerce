import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
// import productReducer from '../features/products/productSlice'
// import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    // products: productReducer,
    // cart: cartReducer,
  },
})