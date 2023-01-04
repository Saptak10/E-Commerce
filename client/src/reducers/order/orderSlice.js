import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
  orderItems: localStorage.getItem("orderItems")
  ? JSON.parse(localStorage.getItem("orderItems"))
  : [],
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
      addToOrders: (state, action) => {
        let tempProductItem = { ...action.payload, date: new Date().toLocaleString(), id: Math.floor(Math.random() * 1000000000) };
        state.orderItems.push(tempProductItem);
        toast.success("Order Placed", {
          position: "bottom-left",
        });
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
      },
      removeFromOrders(state, action) {
        state.orderItems.map((orderItem) => {
          if (orderItem.id === action.payload.id) {
            const nextOrderItems = state.orderItems.filter(
              (item) => item.id !== orderItem.id
            );
  
            state.orderItems = nextOrderItems;
  
            toast.error("Order removed from orders", {
              position: "bottom-left",
            });
          }
          localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
          return state;
        });
      },
      clearOrdersHistory(state, action) {
        state.orderItems = [];
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        toast.error("Order history cleared", { position: "bottom-left" });
      },
    },
})

export const { addToOrders, removeFromOrders, clearOrdersHistory } = orderSlice.actions;
export default orderSlice.reducer