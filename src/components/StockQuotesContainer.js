import React, { useState, useEffect } from 'react';
import StockQuotes from './StockQuotes';

const StockOwnedContainer = () => {

    return(
        <div>
            <h3>Stocks Available</h3>
             <StockQuotes/>           
        </div>
    )
}

export default StockOwnedContainer;