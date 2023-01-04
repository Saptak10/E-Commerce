import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
  ? JSON.parse(localStorage.getItem("wishlistItems"))
  : [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
      addToWishlist: (state, action) => {

        const existingIndex = state.wishlistItems.findIndex(
            (item) => item._id === action.payload._id
          );
          if (existingIndex >= 0) {
            toast.error("Product already in the wishlist", { position: "bottom-left" });
          } else {
            let tempProductItem = { ...action.payload };
            state.wishlistItems.push(tempProductItem);
            toast.success("Product added to wishlist", {
              position: "bottom-left",
            });
          }
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      },
      removeFromWishlist(state, action) {
        state.wishlistItems.map((wishlistItem) => {
          if (wishlistItem._id === action.payload._id) {
            const nextWishlistItems = state.wishlistItems.filter(
              (item) => item._id !== wishlistItem._id
            );
  
            state.wishlistItems = nextWishlistItems;
  
            toast.error("Product removed from wishlist", {
              position: "bottom-left",
            });
          }
          localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
          return state;
        });
      },
      clearWishlist(state, action) {
        state.wishlistItems = [];
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        toast.error("Wishlist cleared", { position: "bottom-left" });
      },
    },
})

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer