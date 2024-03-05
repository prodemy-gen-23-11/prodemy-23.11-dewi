import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import authSlice from "./reducer/authSlice";
import dataSlice from "./reducer/dataSlice";

const store = configureStore({
     reducer:{
          cart : cartSlice,
          auth : authSlice,
          data : dataSlice,
     },
})

export default store