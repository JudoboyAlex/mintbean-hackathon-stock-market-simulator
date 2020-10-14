import React, { useState, useEffect } from 'react';
import StocksOwned from './StocksOwned';
import { useSelector } from 'react-redux';
import { selectStocksOwned } from '../slices/stocksOwnedSlice';

const StocksOwnedContainer = ({availableFunds, setAvailableFunds}) => {
    const stockInfo= useSelector(selectStocksOwned);

    return(
        <div>
            <h3>Sell Stocks</h3>
            <StocksOwned stockInfo={stockInfo} availableFunds={availableFunds} setAvailableFunds={setAvailableFunds}/>
        </div>
    )
}

export default StocksOwnedContainer;