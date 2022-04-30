import { createSlice } from "@reduxjs/toolkit";
import items from "../products.json";

const ItemsSlice = createSlice({
  name: "items",
  initialState: {
    items: items.products,
    total: 0,
    initialBalance: 100000000000,
    balance: 100000000000,
  },
  reducers: {
    setCount: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].count = action.payload.amount;
      state.balance = state.initialBalance;
      state.total = 0;
      state.items.forEach((item) => {
        state.total += item.Price * item.count;
        state.balance -= item.Price * item.count;
      });
    },
  },
});

export const { setCount, calculateBalance } = ItemsSlice.actions;

export default ItemsSlice.reducer;
