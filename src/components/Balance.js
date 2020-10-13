import React, { useState, useEffect } from 'react'

const Balance = ({availableFunds}) => {

    return(
        <div>
            <div>
                <h2>Your Balance: ${availableFunds}</h2>
            </div>
        </div>
    )
}

export default Balance;