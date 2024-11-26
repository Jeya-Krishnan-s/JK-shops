// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isCartVisible: false, // Initial visibility state
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== productId);
      }
    },
    toggleCartVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const { addToCart, removeFromCart, toggleCartVisibility } = cartSlice.actions;
export default cartSlice.reducer;
