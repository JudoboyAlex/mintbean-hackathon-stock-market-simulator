import React, { useState, useEffect } from 'react';
import StocksOwned from './StocksOwned';
import { useSelector } from 'react-redux';
import { selectStocksOwned } from '../slices/stocksOwnedSlice';

const StocksOwnedContainer = () => {
    const stockInfo= useSelector(selectStocksOwned);

    return(
        <div>
            <h3>Stocks Owned</h3>
            <StocksOwned stockInfo={stockInfo} />
        </div>
    )
}

export default StocksOwnedContainer;