import React, { useState, useEffect } from 'react'

const Balance = ({availableFunds}) => {

    const roundedAvilableFunds = availableFunds.toFixed(2)

    return(
        <div>
            <div>
                <h2>Your Balance: ${roundedAvilableFunds}</h2>
            </div>
        </div>
    )
}

export default Balance;