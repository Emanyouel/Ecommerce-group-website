import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    items: [], // [{ id, title, price, image, quantity }]
  },
  reducers: {
    addToBag: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (bagItem) => bagItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromBag: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const { addToBag, removeFromBag, decreaseQuantity } =
  bagSlice.actions;

export default  bagSlice.reducer;
