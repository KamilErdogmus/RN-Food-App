import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload.id
      );

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the cart!`
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.items
);

export const selectCartItemById = createSelector(
  [selectCartItems, (state, id) => id],
  (items, id) => items.filter((item) => item._id === id)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
);

export default cartSlice.reducer;
