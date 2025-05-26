import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
    
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addToCart(state, action) {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        // Check if already in cart
        const cartItem = state.cart.find((item) => item.id === product.id);
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }
      }
    },
    
    // Remove item from cart
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    // Clear the cart
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { setProducts, addToCart, toggleCart, removeFromCart, clearCart } = ProductSlice.actions;
export default ProductSlice.reducer;
