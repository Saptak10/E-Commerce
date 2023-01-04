import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [],
  totalQuantity: 0,
  totalAmount: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const existingIndex = state.cartItems.findIndex(
          (item) => item._id === action.payload._id
        );
        if (existingIndex >= 0) {
          state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            productQuantity: state.cartItems[existingIndex].productQuantity + 1,
          };
        } else {
          let tempProductItem = { ...action.payload, productQuantity: 1 };
          state.cartItems.push(tempProductItem);
          toast.success("Product added to cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      },
      decreaseCart(state, action) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item._id === action.payload._id
        );
  
        if (state.cartItems[itemIndex].productQuantity > 1) {
          state.cartItems[itemIndex].productQuantity -= 1;
        } else if (state.cartItems[itemIndex].productQuantity === 1) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
  
          state.cartItems = nextCartItems;
  
          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
  
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      },
      removeFromCart(state, action) {
        state.cartItems.map((cartItem) => {
          if (cartItem._id === action.payload._id) {
            const nextCartItems = state.cartItems.filter(
              (item) => item._id !== cartItem._id
            );
  
            state.cartItems = nextCartItems;
  
            toast.error("Product removed from cart", {
              position: "bottom-left",
            });
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          return state;
        });
      },
      getTotals(state, action) {
        let { total, quantity } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { price, productQuantity } = cartItem;
            const itemTotal = price * productQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += productQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.totalQuantity = quantity;
        state.totalAmount = total;
      },
      clearCart(state, action) {
        state.cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error("Cart cleared", { position: "bottom-left" });
      },
    },
})

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;
export default cartSlice.reducer