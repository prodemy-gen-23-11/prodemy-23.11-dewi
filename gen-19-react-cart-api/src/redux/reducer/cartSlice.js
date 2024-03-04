import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const payload = { ...action.payload, qty: 1 };
        state.items.push(payload);
      })
      .addCase(incrementCartItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index].qty += 1;
        }
      })
      .addCase(decrementCartItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1 && state.items[index].qty !== 1) {
          state.items[index].qty -= 1;
        }
      })
      .addCase(removeData.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("http://localhost:3000/carts");
  return response.data;
});
export const addToCart = createAsyncThunk("data/addToCart", async (payload) => {
  const response = await axios.post("http://localhost:3000/carts", payload);
  return response.data;
});
export const incrementCartItem = createAsyncThunk(
  "cart/incrementCartItem",
  async (payload) => {
    const response = await axios.put(
      `http://localhost:3000/carts/${payload.id}`,
      payload
    );
    return response.data;
  }
);
export const decrementCartItem = createAsyncThunk(
  "cart/decrementCartItem",
  async (payload) => {
    const response = await axios.put(
      `http://localhost:3000/carts/${payload.id}`,
      payload
    );
    return response.data;
  }
);
export const removeData = createAsyncThunk("data/removeData", async (id) => {
  await axios.delete(`http://localhost:3000/carts/${id}`);
  return id;
});

export default cartSlice.reducer;
