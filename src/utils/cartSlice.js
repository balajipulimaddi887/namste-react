import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items[action.payload?.id] == undefined) {
        state.items[action.payload?.id] = { ...action.payload, count: 1 };
      } else {
        state.items[action.payload?.id] = {
          ...action.payload,
          count: state.items[action.payload?.id].count + 1,
        };
      }
      state.count = state.count + 1;
    },
    clearCart: (state) => {
      state.items = {};
      state.count = 0;
    },
    deleteItem: (state, action) => {
      if (state.items[action.payload?.id].count != 1) {
        state.items[action.payload?.id] = {
          ...action.payload,
          count: state.items[action.payload?.id].count - 1,
        };
      } else {
        delete state.items[action.payload?.id];
      }
      state.count = state.count - 1;
    },
  },
});

export const { addItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
