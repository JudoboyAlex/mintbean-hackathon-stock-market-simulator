import React from 'react';
import BuyStocks from './BuyStocks';

const BuyStocksContainer = ({availableFunds, setAvailableFunds}) => {

    return(
        <div>
            <h3>Buy Stocks</h3>
             <BuyStocks availableFunds={availableFunds} setAvailableFunds={setAvailableFunds}/>           
        </div>
    )
}

export default BuyStocksContainer;