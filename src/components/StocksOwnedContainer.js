import React, { useState, useEffect } from 'react';
import StocksOwned from './StocksOwned';
import { useSelector } from 'react-redux';
import { selectStocksOwned } from '../slices/stocksOwnedSlice';

const StocksOwnedContainer = () => {
    const stocksOwned = useSelector(selectStocksOwned);
    console.log(stocksOwned);
    return(
        <div>
            <h3>Stocks Owned</h3>
            <StocksOwned />
        </div>
    )
}

export default StocksOwnedContainer;