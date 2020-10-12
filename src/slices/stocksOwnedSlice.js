import { createSlice } from '@reduxjs/toolkit';

export const stocksOwnedSlice = createSlice({
    name: 'stocksOwned',
    initialState: {
      value: [],
    },
    reducers: {
      getStocksOwned: (state, {payload}) => {
        state.value = payload.filter((stock) => stock.owned);
        return state;
      },
    },
  });
  
export const { getStocksOwned } = stocksOwnedSlice.actions;

export const selectStocksOwned = state => state.stocksOwned.value;

export default stocksOwnedSlice.reducer;
  