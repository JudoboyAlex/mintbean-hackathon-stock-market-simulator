import React from 'react';
import SellStocks from './SellStocks';
import { useSelector } from 'react-redux';
import { selectStocksOwned } from '../slices/stocksOwnedSlice';

const SellStocksContainer = ({availableFunds, setAvailableFunds}) => {
    const stockInfo= useSelector(selectStocksOwned);

    return(
        <div>
            <h3>Sell Stocks</h3>
            <SellStocks stockInfo={stockInfo} availableFunds={availableFunds} setAvailableFunds={setAvailableFunds}/>
        </div>
    )
}

export default SellStocksContainer;