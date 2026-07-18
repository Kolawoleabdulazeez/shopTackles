import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity"> & { quantity?: number }>) => {
      const incoming = action.payload;
      const existing = state.items.find(
        (item) => item.id === incoming.id && item.size === incoming.size && item.color === incoming.color
      );

      if (existing) {
        existing.quantity += incoming.quantity ?? 1;
      } else {
        state.items.push({ ...incoming, quantity: incoming.quantity ?? 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number; size?: string; color?: string }>) => {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color)
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; size?: string; color?: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color
      );
      if (item) item.quantity = Math.max(1, action.payload.quantity);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;