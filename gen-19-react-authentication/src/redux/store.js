import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import authSlice from "./reducer/authSlice";

const store = configureStore({
     reducer:{
          cart : cartSlice,
          auth : authSlice,
     },
})

export default store