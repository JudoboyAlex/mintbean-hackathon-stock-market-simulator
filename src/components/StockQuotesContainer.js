import React, { useState, useEffect } from 'react';
import StockQuotes from './StockQuotes';
import stockData from '../util/stockData';


const StockOwnedContainer = () => {

    return(
        <div>
            <h3>Stocks Available</h3>
            {stockData.map((stock,index) => 
                <StockQuotes
                key = {index}
                name = {stock.name}
                price = {stock.price}
                />
            )}   
        </div>
    )
}

export default StockOwnedContainer;