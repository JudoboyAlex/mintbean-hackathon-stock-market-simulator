import React, { useState, useEffect } from 'react';
import StockQuotes from './StockQuotes';

const StockOwnedContainer = ({availableFunds, setAvailableFunds}) => {

    return(
        <div>
            <h3>Buy Stocks</h3>
             <StockQuotes availableFunds={availableFunds} setAvailableFunds={setAvailableFunds}/>           
        </div>
    )
}

export default StockOwnedContainer;