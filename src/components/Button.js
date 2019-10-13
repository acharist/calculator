import React from 'react';

function Button({ symbol, setSymbol }) {
    return (
        <button className="button" data-symbol={symbol} onClick={(e) => setSymbol(symbol = e.target.dataset.symbol)}>
            {symbol}
        </button>
    );
}

export default Button;