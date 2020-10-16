import React from 'react';
import './Balance.css';

const Balance = ({availableFunds}) => {

    const roundedAvilableFunds = availableFunds.toFixed(2)

    return(
        <div>
            <div>
                <h2 className="balanceHeader">Your Balance: <span className="currentBalance">${roundedAvilableFunds}</span></h2>
            </div>
        </div>
    )
}

export default Balance;