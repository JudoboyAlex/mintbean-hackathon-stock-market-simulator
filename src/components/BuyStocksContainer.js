import React from 'react';
import BuyStocks from './BuyStocks';
import './BuyStocksContainer.css';

const BuyStocksContainer = ({availableFunds, setAvailableFunds}) => {

    return(
        <div className="buyOrder">
            <h3>Buy Stocks</h3>
             <BuyStocks availableFunds={availableFunds} setAvailableFunds={setAvailableFunds}/>           
        </div>
    )
}

export default BuyStocksContainer;