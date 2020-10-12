import { createSlice } from '@reduxjs/toolkit';

export const stocksOwnedSlice = createSlice({
    name: 'stocksOwned',
    initialState: {
      value: {},
    },
    reducers: {
      getStocksOwned: (state, {payload}) => {
        payload.filter((share) => share.owned);
      },
    },
  });
  
export const { getStocksOwned } = stocksOwnedSlice.actions;

export const selectStocksOwned = state => state;

export default stocksOwnedSlice.reducer;
  