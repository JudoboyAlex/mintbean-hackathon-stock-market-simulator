import React, { useState, useEffect } from 'react';
import StocksOwned from './StocksOwned';

const StocksOwnedContainer = () => {

    return(
        <div>
            <h3>Stocks Owned</h3>
            <StocksOwned />
        </div>
    )
}

export default StocksOwnedContainer;