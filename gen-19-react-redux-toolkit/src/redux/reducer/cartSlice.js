import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "data",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { qty } = action.payload;
      const dataCart = state.cart.findIndex((i) => i.id === action.payload.id);
      if (dataCart >= 0) {
        state.cart[dataCart].qty += qty;
      } else {
        const newData = { ...action.payload, qty: qty };
        state.cart.push(newData)
      }
    },
    incrementQty: (state, action) => {
      const dataCart = state.cart.findIndex((i) => i.id === action.payload.id);
      if (dataCart >= 0) {
        state.cart[dataCart].qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const dataCart = state.cart.findIndex((i) => i.id === action.payload.id);
      if (dataCart >= 0) {
        state.cart[dataCart].qty -= 1;
      }
    },
    remove: (state, action) =>{
     state.cart =  state.cart.filter(i => i.id !== action.payload) 
    }
  },
});

export const { addToCart, decrementQty, remove, incrementQty } = cartSlice.actions;

export default cartSlice.reducer;
